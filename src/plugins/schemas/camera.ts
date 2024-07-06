import { CameraTechnology, CameraVendor, type Camera } from "@prisma/client";
import { t } from "elysia";
import { DATE_PATTERN, URL_PATTERN } from "../../constants";
import type { ToSchema } from "../../types";

export const cameraSchema = t.Object({
	name: t.String(),
	binning: t.Integer(),
	pixelSize: t.Number(),
	resolution: t.Integer(),
	size: t.Number(),
	technology: t.Enum(CameraTechnology),
	vendor: t.Enum(CameraVendor),
	link: t.String({ pattern: URL_PATTERN }),
	releaseDate: t.String({ pattern: DATE_PATTERN }),
} satisfies ToSchema<Camera>);
