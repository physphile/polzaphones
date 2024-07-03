import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let id: number | undefined;

describe("Проверка corePlugin", () => {
	it("Создает Core", async () => {
		const { data } = await api.core.post({ name: "Test core", series: "Cortex", vendor: "ARM" });

		expect(data?.name).toBe("Test core");
		expect(data?.series).toBe("Cortex");
		expect(data?.vendor).toBe("ARM");

		id = data?.id;
	});
	it("Получает все Core", async () => {
		const { data } = await api.core.get({ query: { orderBy: "created_at", order: "desc" } });
		expect(data?.findIndex(c => c.id === id)).not.toBe(-1);
	});
	it("Получает Core по id", async () => {
		if (!id) return;
		const { data } = await api.core({ id: id.toString() }).get();
		expect(data?.name).toBe("Test core");
		expect(data?.series).toBe("Cortex");
		expect(data?.vendor).toBe("ARM");
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.core({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Core", async () => {
		if (!id) return;
		const { response } = await api.core({ id: id.toString() }).delete();
		expect(response.ok).toBeTrue();
		const { status } = await api.core({ id: id.toString() }).get();
		expect(status).toBe(404);
	});
});
