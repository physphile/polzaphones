import Elysia, { t } from "elysia";
import { prisma } from "../../prisma";
import { params, query } from "../constants";
import { toQuery, toPrisma } from "../utils";
import { socSchema } from "./schemas/soc";

const endpoint = "/soc";

const socQuery = t.Partial(t.Object(toQuery(socSchema.properties, ["gpu"])));

export const socPlugin = new Elysia({ name: "socPlugin", detail: { tags: ["Soc"] } })
	.post(
		endpoint,
		async ({ body: { cores, gpu, ...body } }) => {
			const soc = await prisma.soc.create({
				data: {
					...body,
					gpu: {
						connect: {
							id: gpu,
						},
					},
				},
			});

			return prisma.soc.update({
				include: { cores: { include: { core: true } }, gpu: true },
				where: {
					id: soc.id,
				},
				data: {
					cores: {
						createMany: cores
							? {
									data: cores.map(c => ({
										frequency: c.frequency,
										number: c.number,
										coreId: c.id,
									})),
							  }
							: undefined,
					},
				},
			});
		},
		{ body: t.Partial(socSchema) }
	)
	.get(
		endpoint,
		({ query: { cores, ...query } }) =>
			prisma.soc.findMany(toPrisma(query, ["gpu", "vendor", "processVendor", "process", "series", "link"])),
		{
			query: t.Partial(t.Composite([query, socQuery])),
		}
	)
	.get(
		`${endpoint}/:id`,
		async ({ params: { id } }) =>
			prisma.soc.findUniqueOrThrow({
				where: { id },
				include: { cores: { include: { core: true } }, gpu: true },
			}),
		{ params }
	)
	.patch(
		`${endpoint}/:id`,
		async ({ params: { id }, body: { gpu, cores, ...body } }) => {
			const soc = await prisma.soc.findUniqueOrThrow({ where: { id }, include: { cores: true } });
			return prisma.soc.update({
				include: { cores: { include: { core: true } }, gpu: true },
				where: { id },
				data: {
					...body,
					gpu: {
						connect: {
							id: gpu,
						},
					},
					cores: {
						deleteMany: soc.cores
							.filter(c => cores?.findIndex(_c => _c.id === c.coreId) === -1)
							.map(c => ({
								coreId: c.coreId,
							})),
						createMany: cores
							? {
									data: cores.map(c => ({
										frequency: c.frequency,
										number: c.number,
										coreId: c.id,
									})),
									skipDuplicates: true,
							  }
							: undefined,
					},
				},
			});
		},
		{ params, body: t.Partial(socSchema) }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.soc.delete({ where: { id } }), {
		params,
	});
