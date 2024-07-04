import Elysia, { t } from "elysia";
import { GetQuery, LIMIT, minMax, params, toRange, type ToSchema } from "./types";
import { $Enums, type Camera } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/camera";

export const cameraPartial = t.Partial(
	t.Object({
		name: t.String(),
		binning: t.Numeric(),
		pixelSize: t.Numeric(),
		resolution: t.Numeric(),
		size: t.Numeric(),
		technology: t.Enum($Enums.CameraTechnology),
		vendor: t.Optional(t.Enum($Enums.CameraVendor)),
	} satisfies ToSchema<Camera>)
);

const socQuery = t.Composite([
	t.Omit(cameraPartial, ["binning", "pixelSize", "resolution", "size"]),
	t.Object({
		binning: minMax,
		pixelSize: minMax,
		resolution: minMax,
		size: minMax,
	}),
]);

export const cameraPlugin = new Elysia({ name: "cameraPlugin" })
	.post(
		endpoint,
		({ body: { ...body } }) =>
			prisma.camera.create({
				data: body,
			}),
		{ body: cameraPartial }
	)
	.get(
		endpoint,
		({ query: { name, binning, pixelSize, resolution, size, technology, vendor, limit = LIMIT, offset, order, orderBy } }) =>
			prisma.camera.findMany({
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
					binning: toRange(binning),
					pixelSize: toRange(pixelSize),
					resolution: toRange(resolution),
					size: toRange(size, { reverse: true }),
					technology,
				},
			}),
		{
			query: t.Composite([GetQuery, socQuery]),
		}
	)
	.get(`${endpoint}/:id`, async ({ params: { id } }) => prisma.camera.findUniqueOrThrow({ where: { id } }), { params })
	.patch(
		`${endpoint}/:id`,
		({ params: { id }, body: { ...body } }) =>
			prisma.camera.update({
				where: { id },
				data: body,
			}),
		{ params, body: cameraPartial }
	)
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.camera.delete({ where: { id } }), {
		params,
	});
