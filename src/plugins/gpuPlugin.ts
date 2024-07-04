import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, params, type ToSchema } from "./types";
import { $Enums, type Gpu } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/gpu";

export const gpuPartial = t.Partial(
	t.Object({
		name: t.String(),
		series: t.Enum($Enums.GpuSeries),
		vendor: t.Enum($Enums.GpuVendor),
	} satisfies ToSchema<Gpu>)
);

export const gpuPlugin = new Elysia({ name: "gpuPlugin", detail: { tags: ["Gpu"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.gpu.create({
				data: body,
			}),
		{ body: gpuPartial }
	)
	.get(
		endpoint,
		({ query: { name, series, vendor, limit = LIMIT, offset, order, orderBy } }) =>
			prisma.gpu.findMany({
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
					series,
					vendor,
				},
			}),
		{
			query: t.Composite([GetQuery, gpuPartial]),
		}
	)
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.gpu.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.gpu.update({
				where: { id },
				data: body,
			}),
		{ params, body: gpuPartial }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.gpu.delete({ where: { id } }), {
		params,
	});
