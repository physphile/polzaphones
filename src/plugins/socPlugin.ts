import Elysia, { t } from "elysia";
import { ProcessVendor, SocSeries, SocVendor } from "@prisma/client";
import { prisma } from "../../prisma";
import { params, query, URL_PATTERN } from "../constants";
import { toQuery, toPrisma } from "../utils";

const endpoint = "/soc";

const socSchema = t.Object({
	name: t.String(),
	vendor: t.Enum(SocVendor),
	processVendor: t.Enum(ProcessVendor),
	gpuCores: t.Integer(),
	gpuFrequency: t.Integer(),
	nanometers: t.Integer(),
	process: t.String(),
	cores: t.Array(
		t.Object({
			id: t.Integer(),
			frequency: t.Integer(),
			number: t.Integer(),
		})
	),
	gpu: t.Integer(),
	series: t.Enum(SocSeries),
	link: t.String({ pattern: URL_PATTERN }),
});
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
