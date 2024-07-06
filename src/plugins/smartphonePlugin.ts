import Elysia, { t } from "elysia";
import type { ToSchema } from "../types";
import { CameraMark, type Smartphone } from "@prisma/client";

const smartphonePartial = t.Partial(
	t.Object({
		android: t.Numeric({}),
		antutu: t.Numeric(),
		aod: t.Boolean(),
		batteryCapacity: t.Numeric(),
		bluetooth: t.Numeric(),
		callRecording: t.Boolean(),
		cameraMark: t.Enum(CameraMark),
		codecAac: t.Boolean(),
		codecAptx: t.Boolean(),
		codecAptxAdaptive: t.Boolean(),
		codecAptxHd: t.Boolean(),
		codecLc3: t.Boolean(),
		codecLdac: t.Boolean(),
		codecLhdc: t.Boolean(),
		codecSbc: t.Boolean(),
		colorHex: t.String({ pattern: "^#[\\da-fA-F]{6}$" }),
		colorName: t.Boolean(),
	} satisfies ToSchema<Smartphone>)
);

export const smartphonePlugin = new Elysia({ name: "smartphonePlugin", detail: { tags: ["Smartphone"] } });
