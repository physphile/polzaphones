import { GpuSeries, GpuVendor, type Gpu } from "@prisma/client";
import { t } from "elysia";
import type { ToSchema } from "../../types";
import { DATE_PATTERN } from "../../constants";

export const gpuSchema = t.Object({
	name: t.String(),
	series: t.Enum(GpuSeries),
	vendor: t.Enum(GpuVendor),
	link: t.String(),
	releaseDate: t.String({ pattern: DATE_PATTERN }),
} satisfies ToSchema<Gpu>);
