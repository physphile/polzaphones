import Elysia, { t } from "elysia";
import { CoreSeries, CoreVendor, type Core } from "@prisma/client";
import { prisma } from "../../prisma";
import { params, query } from "../constants";
import type { ToSchema } from "../types";
import { toPrisma, toQuery } from "../utils";

const endpoint = "/core";

const coreSchema = t.Object({
	name: t.String(),
	series: t.Enum(CoreSeries),
	vendor: t.Enum(CoreVendor),
	link: t.String(),
} satisfies ToSchema<Core>);
const coreQuery = t.Object(toQuery(coreSchema.properties));

export const corePlugin = new Elysia({ name: "corePlugin", detail: { tags: ["Core"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.core.create({
				data: body,
			}),
		{ body: t.Partial(coreSchema) }
	)
	.get(endpoint, ({ query: { ...query } }) => prisma.core.findMany(toPrisma(query, ["link", "series", "vendor"])), {
		query: t.Partial(t.Composite([query, coreQuery])),
	})
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.core.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.core.update({
				where: { id },
				data: body,
			}),
		{ params, body: t.Partial(coreSchema) }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.core.delete({ where: { id } }), {
		params,
	});
