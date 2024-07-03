import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let socId: number | undefined;
let coreId: number | undefined;
let gpuId: number | undefined;

const testCore = {
	name: "Test Core",
};

const testGpu = {
	name: "Test Gpu",
};

describe("Проверка socPlugin", () => {
	it("Создает Soc", async () => {
		const { data: gpu } = await api.gpu.post(testGpu);
		const { data: core } = await api.core.post(testCore);
		if (!core || !gpu) return;
		coreId = core.id;
		gpuId = gpu.id;

		const { data, error } = await api.soc.post({
			name: "Test Soc",
			gpuCores: 5,
			gpuFrequency: 1389,
			nanometers: 5,
			vendor: "Apple" as const,
			gpu: gpuId,
			cores: [{ id: coreId, frequency: 3300, number: 8 }],
		});

		console.log(JSON.stringify(error));

		expect(data?.name).toBe("Test Soc");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpuId);
		expect(data?.gpu?.series).toBeNull();
		expect(data?.gpu?.name).toBe(testGpu.name);
		expect(data?.gpu?.vendor).toBeNull();
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(3300);
		expect(data?.cores?.[0].number).toBe(8);
		expect(data?.cores?.[0].core.name).toBe(testCore.name);
		expect(data?.cores?.[0].core.id).toBe(coreId);
		expect(data?.cores?.[0].core.vendor).toBeNull();
		expect(data?.cores?.[0].core.series).toBeNull();

		socId = data?.id;
	});
	it("Получает все Soc", async () => {
		const { data } = await api.soc.get({ query: { orderBy: "created_at", order: "desc" } });
		expect(data?.findIndex(c => c.id === socId)).not.toBe(-1);
	});
	it("Получает Soc по id", async () => {
		if (!socId || !coreId || !gpuId) return;
		const { data } = await api.soc({ id: socId.toString() }).get();

		expect(data?.name).toBe("Test Soc");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpuId);
		expect(data?.gpu?.series).toBeNull();
		expect(data?.gpu?.name).toBe(testGpu.name);
		expect(data?.gpu?.vendor).toBeNull();
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(3300);
		expect(data?.cores?.[0].number).toBe(8);
		expect(data?.cores?.[0].core.name).toBe(testCore.name);
		expect(data?.cores?.[0].core.id).toBe(coreId);
		expect(data?.cores?.[0].core.vendor).toBeNull();
		expect(data?.cores?.[0].core.series).toBeNull();
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.soc({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Soc", async () => {
		if (!socId || !coreId || !gpuId) return;
		const { response } = await api.soc({ id: socId.toString() }).delete();
		const { status } = await api.soc({ id: socId.toString() }).get();
		const { response: coreResponse } = await api.core({ id: coreId }).delete();
		const { response: gpuResponse } = await api.core({ id: gpuId }).delete();
		expect(status).toBe(404);
		expect(response.ok).toBeTrue();
		expect(coreResponse.ok).toBeTrue();
		expect(gpuResponse.ok).toBeTrue();
	});
});
