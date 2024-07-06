import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";
import { fail } from "./fail";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let id: number | undefined;

describe("Проверка cameraPlugin", () => {
	it("Создает Camera", async () => {
		const { data } = await api.camera.post({
			name: "Test camera",
			binning: 4,
			pixelSize: 1.2,
			resolution: 50,
			size: 1.51,
			technology: "CMOS",
			vendor: "Sony",
		});

		expect(data?.name).toBe("Test camera");
		expect(data?.binning).toBe(4);
		expect(data?.pixelSize).toBe(1.2);
		expect(data?.resolution).toBe(50);
		expect(data?.size).toBe(1.51);
		expect(data?.technology).toBe("CMOS");
		expect(data?.vendor).toBe("Sony");

		id = data?.id;
	});
	it("Получает все Camera", async () => {
		const { data } = await api.camera.get({ query: { orderBy: "createdAt", order: "desc" } });
		const i = data?.findIndex(c => c.id === id);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Учитывает query-параметры", async () => {
		const { data } = await api.camera.get({
			query: {
				orderBy: "createdAt",
				order: "desc",
				name: "Test camera",
				vendor: "Sony",
			},
		});
		const i = data?.findIndex(c => c.id === id);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Получает Camera по id", async () => {
		if (!id) return fail();
		const { data } = await api.camera({ id: id.toString() }).get();
		expect(data?.name).toBe("Test camera");
		expect(data?.binning).toBe(4);
		expect(data?.pixelSize).toBe(1.2);
		expect(data?.resolution).toBe(50);
		expect(data?.size).toBe(1.51);
		expect(data?.technology).toBe("CMOS");
		expect(data?.vendor).toBe("Sony");
	});
	it("Изменяет Camera", async () => {
		if (!id) return fail();
		const { data } = await api.camera({ id }).patch({
			name: "Тестовый слоняра",
			size: 1.4,
			binning: 2,
		});
		expect(data?.name).toBe("Тестовый слоняра");
		expect(data?.size).toBe(1.4);
		expect(data?.binning).toBe(2);
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.camera({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Camera", async () => {
		if (!id) return fail();
		const { response } = await api.camera({ id: id.toString() }).delete();
		expect(response.ok).toBeTrue();
		const { status } = await api.camera({ id: id.toString() }).get();
		expect(status).toBe(404);
	});
});
