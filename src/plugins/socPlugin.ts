import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, minMax, params, withId } from "./types";
import { $Enums } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/soc";

const socBody = t.Object({
	name: t.String(),
	vendor: t.Optional(t.Enum($Enums.SocVendor)),
	processVendor: t.Optional(t.Enum($Enums.ProcessVendor)),
	gpuCores: t.Optional(t.Numeric()),
	gpuFrequency: t.Optional(t.Numeric()),
	nanometers: t.Optional(t.Numeric()),
	process: t.Optional(t.String()),
	cores: t.Optional(
		t.Array(
			t.Object({
				id: t.Numeric(),
				frequency: t.Optional(t.Numeric()),
				number: t.Optional(t.Numeric()),
			})
		)
	),
	gpu: t.Optional(t.Numeric()),
});
const socPartial = t.Partial(socBody);
const socQuery = t.Composite([
	t.Omit(socPartial, ["gpuCores", "gpuFrequency", "nanometers"]),
	t.Object({
		gpuCores: minMax,
		gpuFrequency: minMax,
		nanometers: minMax,
	}),
]);

export const socPlugin = new Elysia({ name: "socPlugin" })
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
						create: cores?.map(c => ({
							frequency: c.frequency,
							number: c.number,
							coreId: c.id,
						})),
					},
				},
			});
		},
		{ body: socBody }
	)
	.get(
		endpoint,
		({
			query: {
				name,
				vendor,
				gpuCores,
				gpuFrequency,
				nanometers,
				process,
				processVendor,
				limit = LIMIT,
				offset,
				order,
				orderBy,
			},
		}) =>
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
					gpuCores: {
						gte: gpuCores?.min,
						lte: gpuCores?.max,
					},
					gpuFrequency: {
						gte: gpuFrequency?.min,
						lte: gpuFrequency?.max,
					},
					nanometers: {
						gte: nanometers?.min,
						lte: nanometers?.max,
					},
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
						disconnect: soc.cores
							.filter(c => cores?.findIndex(_c => _c.id === c.coreId) === -1)
							.map(c => ({
								frequency: c.frequency,
								number: c.number,
								coreId_socId: {
									coreId: c.coreId,
									socId: soc.id,
								},
							})),
						connect: cores
							?.filter(c => soc.cores.findIndex(_c => _c.coreId === c.id) === -1)
							.map(c => ({
								frequency: c.frequency,
								number: c.number,
								coreId_socId: {
									coreId: c.id,
									socId: soc.id,
								},
							})),
					},
				},
			});
		},
		{ params, body: socPartial }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.soc.delete({ where: { id } }), {
		params,
	});
