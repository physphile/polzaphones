import { SocVendor, ProcessVendor, SocSeries } from "@prisma/client";
import { t } from "elysia";
import { DATE_PATTERN, URL_PATTERN } from "../../constants";

export const socSchema = t.Object({
	name: t.String(),
	vendor: t.Enum(SocVendor),
	processVendor: t.Enum(ProcessVendor),
	gpuCores: t.Integer(),
	gpuFrequency: t.Integer(),
	nanometers: t.Integer(),
	process: t.String(),
	cores: t.Array(
		t.Object({
			id: t.Integer(),
			frequency: t.Integer(),
			number: t.Integer(),
		})
	),
	gpu: t.Integer(),
	series: t.Enum(SocSeries),
	link: t.String({ pattern: URL_PATTERN }),
	releaseDate: t.String({ pattern: DATE_PATTERN }),
});
