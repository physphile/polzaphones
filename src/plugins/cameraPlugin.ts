import Elysia, { t } from "elysia";
import { prisma } from "../../prisma";
import { params, query } from "../constants";
import { toPrisma, toQuery } from "../utils";
import { cameraSchema } from "./schemas/camera";

const endpoint = "/camera";

const socQuery = t.Object(toQuery(cameraSchema.properties));

export const cameraPlugin = new Elysia({ name: "cameraPlugin", detail: { tags: ["Camera"] } })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.camera.create({
				data: body,
			}),
		{ body: t.Partial(cameraSchema) }
	)
	.get(endpoint, ({ query: { ...query } }) => prisma.camera.findMany(toPrisma(query, ["technology", "vendor", "link"])), {
		query: t.Partial(t.Composite([query, socQuery])),
	})
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.camera.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.camera.update({
				where: { id },
				data: body,
			}),
		{ params, body: t.Partial(cameraSchema) }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.camera.delete({ where: { id } }), {
		params,
	});
