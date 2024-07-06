import { CoreSeries, CoreVendor, type Core } from "@prisma/client";
import { t } from "elysia";
import type { ToSchema } from "../../types";
import { DATE_PATTERN } from "../../constants";

export const coreSchema = t.Object({
	name: t.String(),
	series: t.Enum(CoreSeries),
	vendor: t.Enum(CoreVendor),
	link: t.String(),
	releaseDate: t.String({ pattern: DATE_PATTERN }),
} satisfies ToSchema<Core>);
