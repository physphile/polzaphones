import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, params, type ToSchema } from "./types";
import { $Enums, type Core } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/core";

export const coreBody = t.Object({
	name: t.String(),
	series: t.Optional(t.Enum($Enums.CoreSeries)),
	vendor: t.Optional(t.Enum($Enums.CoreVendor)),
} satisfies ToSchema<Core>);
export const corePartial = t.Partial(coreBody);

export const corePlugin = new Elysia({ name: "corePlugin" })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.core.create({
				data: body,
			}),
		{ body: coreBody }
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
	.get(
		`${endpoint}/:id`,
		async ({ params: { id } }) => prisma.core.findUniqueOrThrow({ where: { id } }),
		{ params }
	)
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
