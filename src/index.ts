import { Elysia, error, t } from "elysia";
import { corePlugin } from "./plugins/corePlugin";
import {
	PrismaClientInitializationError,
	PrismaClientKnownRequestError,
	PrismaClientRustPanicError,
	PrismaClientUnknownRequestError,
	PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { gpuPlugin } from "./plugins/gpuPlugin";
import { socPlugin } from "./plugins/socPlugin";
import { cameraPlugin } from "./plugins/cameraPlugin";
import swagger from "@elysiajs/swagger";
import { smartphonePlugin } from "./plugins/smartphonePlugin";

const port = 3000;

export const app = new Elysia()
	.onError(({ error: err }) => {
		if (err instanceof PrismaClientKnownRequestError) {
			switch (err.code) {
				case "P2025":
					return error(404, { ...err, message: "Не найдено" });
				case "P2022":
					return error(500, {
						...err,
						message: `В таблице ${err.meta?.modelName} нет колонки ${err.meta?.column}`,
					});
				case "P2002":
					return error(409, { ...err, message: "Конфликт" });
			}
		}
		if (err instanceof PrismaClientUnknownRequestError) {
			return error(500, { ...err, message: "Неизвестная ошибка Prisma" });
		}
		if (err instanceof PrismaClientRustPanicError) {
			return error(500, { ...err, message: "Неизвестная ошибка Rust Panic" });
		}
		if (err instanceof PrismaClientInitializationError) {
			return error(500, { ...err, message: "Ошибка подключения к базе данных" });
		}
		if (err instanceof PrismaClientValidationError) {
			return error(500, { ...err, message: "Ошибка валидации запроса к базе данных" });
		}
		return error(500, JSON.stringify(err));
	})
	.use(
		swagger({
			documentation: {
				info: {
					title: "Документация api Polzaphones",
					version: "0.0.1",
				},
				tags: [
					{ name: "Smartphone", description: "Smartphone endpoints" },
					{ name: "Camera", description: "Camera endpoints" },
					{ name: "Soc", description: "Soc endpoint" },
					{ name: "Gpu", description: "Soc endpoints" },
					{ name: "Core", description: "Core endpoints" },
				],
			},
		})
	)
	.use(corePlugin)
	.use(gpuPlugin)
	.use(socPlugin)
	.use(cameraPlugin)
	.use(smartphonePlugin)
	.listen(port, () => console.log(`Bun is listening port ${port}`));
