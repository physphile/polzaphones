import Elysia, { t } from "elysia";
import { smartphoneSchema } from "./schemas/smartphone";
import { prisma } from "../../prisma";
import { toQuery, toPrisma } from "../utils";
import { pageQuery, params } from "../constants";

const endpoint = "/smartphone";

const smartphoneQuery = t.Object(toQuery(smartphoneSchema.properties, ["soc"]));

export const smartphonePlugin = new Elysia({
	name: "smartphonePlugin",
	detail: { tags: ["Smartphone"] },
})
	.post(
		endpoint,
		async ({ body: { cameras, soc, features: fs, stores, ...body } }) => {
			const features = fs
				? await prisma.feature.createManyAndReturn({
						skipDuplicates: true,
						data: fs.map(f => ({
							name: f,
						})),
				  })
				: [];
			return prisma.smartphone.create({
				include: {
					cameras: { include: { camera: true } },
					features: { include: { feature: true } },
					soc: true,
					stores: { include: { store: true } },
				},
				data: {
					...body,
					features: {
						createMany: {
							skipDuplicates: true,
							data: features.map(f => ({ featureId: f.id })),
						},
					},
					soc: {
						connect: {
							id: soc,
						},
					},
					cameras: {
						createMany: {
							skipDuplicates: true,
							data:
								cameras?.map(c => ({
									...c,
									cameraId: c.id,
								})) ?? [],
						},
					},
				},
			});
		},
		{ body: t.Partial(smartphoneSchema) }
	)
	.get(
		endpoint,
		// @ts-ignore
		({ query: { cameras, features, stores, ...query } }) =>
			// @ts-ignore
			prisma.smartphone.findMany(
				// @ts-ignore
				toPrisma(query, [
					"vendor",
					"resistance",
					"packAdapterUsb",
					"simSize",
					"frameMaterial",
					"rearMaterial",
					"usbType",
					"usbVersion",
					"ramType",
					"romType",
					"sound",
					"displayType",
					"displayAspectRatio",
					"fingerprintPosition",
					"fingerprintType",
					"wifi",
					"fourpda",
					"polza",
					"website",
					"kimovil",
					"devdb",
					"cameraMark",
					"releaseDate",
				])
			),
		{
			query: t.Optional(t.Composite([pageQuery, smartphoneQuery])),
		}
	)
	.get(
		`${endpoint}/:id`,
		({ params: { id } }) => prisma.smartphone.findUniqueOrThrow({ where: { id } }),
		{
			params,
		}
	)
	.patch(`${endpoint}/:id`, async ({ params, body }) => {}, {
		body: t.Partial(smartphoneSchema),
		params,
	})
	.delete(`${endpoint}/:id`, ({ params: { id } }) => prisma.smartphone.delete({ where: { id } }), {
		params,
	});
