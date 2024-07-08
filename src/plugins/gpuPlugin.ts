import Elysia, { t } from "elysia";
import { prisma } from "../../prisma";
import { params, pageQuery } from "../constants";
import { toPrisma, toQuery } from "../utils";
import { gpuSchema } from "./schemas/gpu";

const endpoint = "/gpu";

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
	.get(
		endpoint,
		({ query: { ...query } }) => prisma.gpu.findMany(toPrisma(query, ["link", "series", "vendor"])),
		{
			query: t.Partial(t.Composite([pageQuery, gpuQuery])),
		}
	)
	.get(`${endpoint}/:id`, ({ params: { id } }) => prisma.gpu.findUniqueOrThrow({ where: { id } }), {
		params,
	})
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
