import Elysia, { t } from "elysia";
import { GpuSeries, GpuVendor, type Gpu } from "@prisma/client";
import { prisma } from "../../prisma";
import { LIMIT, params, query } from "../constants";
import type { ToSchema } from "../types";
import { toPrisma, toQuery } from "../utils";

const endpoint = "/gpu";

const gpuSchema = t.Object({
	name: t.String(),
	series: t.Enum(GpuSeries),
	vendor: t.Enum(GpuVendor),
	link: t.String(),
} satisfies ToSchema<Gpu>);
const gpuQuery = t.Object(toQuery(gpuSchema.properties));

export const gpuPlugin = new Elysia({ name: "gpuPlugin", detail: { tags: ["Gpu"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.gpu.create({
				data: body,
			}),
		{ body: t.Partial(gpuSchema) }
	)
	.get(endpoint, ({ query: { ...query } }) => prisma.gpu.findMany(toPrisma(query, ["link", "series", "vendor"])), {
		query: t.Partial(t.Composite([query, gpuQuery])),
	})
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.gpu.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.gpu.update({
				where: { id },
				data: body,
			}),
		{ params, body: t.Partial(gpuSchema) }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.gpu.delete({ where: { id } }), {
		params,
	});
