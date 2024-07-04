import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, params, type ToSchema } from "./types";
import { $Enums, type Core } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/core";

export const corePartial = t.Partial(
	t.Object({
		name: t.String(),
		series: t.Enum($Enums.CoreSeries),
		vendor: t.Enum($Enums.CoreVendor),
	} satisfies ToSchema<Core>)
);

export const corePlugin = new Elysia({ name: "corePlugin", detail: { tags: ["Core"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.core.create({
				data: body,
			}),
		{ body: corePartial }
	)
	.get(
		endpoint,
		({ query: { name, series, vendor, limit = LIMIT, offset, order, orderBy } }) =>
			prisma.core.findMany({
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
			query: t.Composite([GetQuery, corePartial]),
		}
	)
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.core.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.core.update({
				where: { id },
				data: body,
			}),
		{ params, body: corePartial }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.core.delete({ where: { id } }), {
		params,
	});
