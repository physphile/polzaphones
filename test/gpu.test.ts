import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let id: number | undefined;

describe("Проверка gpuPlugin", () => {
	it("Создает Gpu", async () => {
		const { data } = await api.gpu.post({ name: "Test gpu", series: "Immortalis", vendor: "ARM" });

		expect(data?.name).toBe("Test gpu");
		expect(data?.series).toBe("Immortalis");
		expect(data?.vendor).toBe("ARM");

		id = data?.id;
	});
	it("Получает все Gpu", async () => {
		const { data } = await api.gpu.get({ query: { orderBy: "created_at", order: "desc" } });
		expect(data?.findIndex(c => c.id === id)).not.toBe(-1);
	});
	it("Получает Gpu по id", async () => {
		if (!id) return;
		const { data } = await api.gpu({ id: id.toString() }).get();
		expect(data?.name).toBe("Test gpu");
		expect(data?.series).toBe("Immortalis");
		expect(data?.vendor).toBe("ARM");
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.gpu({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Gpu", async () => {
		if (!id) return;
		const { response } = await api.gpu({ id: id.toString() }).delete();
		expect(response.ok).toBeTrue();
		const { status } = await api.gpu({ id: id.toString() }).get();
		expect(status).toBe(404);
	});
});
