import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, minMax, params, toRange } from "./types";
import { $Enums } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/soc";

const socPartial = t.Partial(
	t.Object({
		name: t.String(),
		vendor: t.Enum($Enums.SocVendor),
		processVendor: t.Enum($Enums.ProcessVendor),
		gpuCores: t.Numeric(),
		gpuFrequency: t.Numeric(),
		nanometers: t.Numeric(),
		process: t.String(),
		cores: t.Array(
			t.Object({
				id: t.Numeric(),
				frequency: t.Numeric(),
				number: t.Numeric(),
			})
		),
		gpu: t.Numeric(),
	})
);
const socQuery = t.Composite([
	t.Omit(socPartial, ["gpuCores", "gpuFrequency", "nanometers"]),
	t.Object({
		gpuCores: minMax,
		gpuFrequency: minMax,
		nanometers: minMax,
	}),
]);

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
		{ body: socPartial }
	)
	.get(
		endpoint,
		({ query: { name, vendor, gpuCores, gpuFrequency, nanometers, process, processVendor, limit = LIMIT, offset, order, orderBy } }) =>
			prisma.soc.findMany({
				orderBy: orderBy
					? {
							[orderBy]: order,
						}
					: undefined,
				take: limit,
				skip: offset,
				where: {
					name: {
						contains: name,
					},
					vendor,
					gpuCores: toRange(gpuCores),
					gpuFrequency: toRange(gpuFrequency),
					nanometers: toRange(nanometers),
					process,
					processVendor,
				},
			}),
		{
			query: t.Composite([GetQuery, socQuery]),
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
		{ params, body: socPartial }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.soc.delete({ where: { id } }), {
		params,
	});
