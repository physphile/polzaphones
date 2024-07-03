import { Elysia, error } from "elysia";
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

const port = 3000;

export const app = new Elysia()
	.onError(({ code, error: err }) => {
		if (err instanceof PrismaClientKnownRequestError) {
			switch (err.code) {
				case "P2025":
					return error(404, { ...err, message: "Не найдено" });
				case "P2022":
					return error(500, {
						...err,
						message: `В таблице ${err.meta?.modelName} нет колонки ${err.meta?.column}`,
					});
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
	.use(corePlugin)
	.use(gpuPlugin)
	.use(socPlugin)
	.listen(port, () => console.log(`Bun is listening port ${port}`));
