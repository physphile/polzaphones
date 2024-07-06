import Elysia, { t } from "elysia";
import { CameraTechnology, CameraVendor, type Camera } from "@prisma/client";
import { prisma } from "../../prisma";
import { params, query, URL_PATTERN } from "../constants";
import type { ToSchema } from "../types";
import { toPrisma, toQuery } from "../utils";

const endpoint = "/camera";

const cameraSchema = t.Object({
	name: t.String(),
	binning: t.Integer(),
	pixelSize: t.Number(),
	resolution: t.Integer(),
	size: t.Number(),
	technology: t.Enum(CameraTechnology),
	vendor: t.Enum(CameraVendor),
	link: t.String({ pattern: URL_PATTERN }),
} satisfies ToSchema<Camera>);
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
