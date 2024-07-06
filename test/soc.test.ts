import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";
import { fail } from "./fail";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let socId: number | undefined;
let core1Id: number | undefined;
let core2Id: number | undefined;
let gpu1Id: number | undefined;
let gpu2Id: number | undefined;

const testCore1 = {
	name: "Test Core #1",
};

const testGpu1 = {
	name: "Test Gpu #1",
};

const testCore2 = {
	name: "Test Core #2",
};

const testGpu2 = {
	name: "Test Gpu #2",
};

describe("Проверка socPlugin", () => {
	it("Создает Soc", async () => {
		const { data: gpu1 } = await api.gpu.post(testGpu1);
		const { data: gpu2 } = await api.gpu.post(testGpu2);
		const { data: core1 } = await api.core.post(testCore1);
		const { data: core2 } = await api.core.post(testCore2);
		core1Id = core1?.id;
		gpu1Id = gpu1?.id;
		core2Id = core2?.id;
		gpu2Id = gpu2?.id;
		if (!core1Id || !gpu1Id) return fail();

		const { data } = await api.soc.post({
			name: "Test Soc",
			gpuCores: 5,
			gpuFrequency: 1389,
			nanometers: 5,
			vendor: "Apple" as const,
			gpu: gpu1Id,
			cores: [{ id: core1Id, frequency: 3300, number: 8 }],
		});
		socId = data?.id;

		expect(data?.name).toBe("Test Soc");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpu1Id);
		expect(data?.gpu?.series).toBe("Unknown");
		expect(data?.gpu?.name).toBe(testGpu1.name);
		expect(data?.gpu?.vendor).toBe("Unknown");
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(3300);
		expect(data?.cores?.[0].number).toBe(8);
		expect(data?.cores?.[0].core.name).toBe(testCore1.name);
		expect(data?.cores?.[0].core.id).toBe(core1Id);
		expect(data?.cores?.[0].core.vendor).toBe("Unknown");
		expect(data?.cores?.[0].core.series).toBe("Unknown");
	});
	it("Получает все Soc", async () => {
		const { data } = await api.soc.get({ query: { orderBy: "createdAt", order: "desc" } });
		const i = data?.findIndex(c => c.id === socId);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Учитывает query-параметры", async () => {
		const { data } = await api.soc.get({ query: { orderBy: "createdAt", order: "desc" } });
		const i = data?.findIndex(c => c.id === socId);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Получает Soc по id", async () => {
		if (!socId || !core1Id || !gpu1Id) return fail();
		const { data } = await api.soc({ id: socId.toString() }).get();

		expect(data?.name).toBe("Test Soc");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpu1Id);
		expect(data?.gpu?.series).toBe("Unknown");
		expect(data?.gpu?.name).toBe(testGpu1.name);
		expect(data?.gpu?.vendor).toBe("Unknown");
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(3300);
		expect(data?.cores?.[0].number).toBe(8);
		expect(data?.cores?.[0].core.name).toBe(testCore1.name);
		expect(data?.cores?.[0].core.id).toBe(core1Id);
		expect(data?.cores?.[0].core.vendor).toBe("Unknown");
		expect(data?.cores?.[0].core.series).toBe("Unknown");
	});
	it("Изменяет Soc", async () => {
		if (!socId || !core2Id || !gpu2Id) return fail();
		const { data } = await api.soc({ id: socId }).patch({
			name: "Тестовый слоняра",
			gpu: gpu2Id,
			cores: [{ id: core2Id, frequency: 4000, number: 10 }],
		});

		expect(data?.name).toBe("Тестовый слоняра");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpu2Id);
		expect(data?.gpu?.series).toBe("Unknown");
		expect(data?.gpu?.name).toBe(testGpu2.name);
		expect(data?.gpu?.vendor).toBe("Unknown");
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(4000);
		expect(data?.cores?.[0].number).toBe(10);
		expect(data?.cores?.[0].core.name).toBe(testCore2.name);
		expect(data?.cores?.[0].core.id).toBe(core2Id);
		expect(data?.cores?.[0].core.vendor).toBe("Unknown");
		expect(data?.cores?.[0].core.series).toBe("Unknown");
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.soc({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Soc", async () => {
		if (socId) {
			const { response } = await api.soc({ id: socId.toString() }).delete();
			const { status } = await api.soc({ id: socId.toString() }).get();
			expect(status).toBe(404);
			expect(response.ok).toBeTrue();
		}
		if (core1Id) {
			const { response } = await api.core({ id: core1Id }).delete();
			expect(response.ok).toBeTrue();
		}

		if (core2Id) {
			const { response } = await api.core({ id: core2Id }).delete();
			expect(response.ok).toBeTrue();
		}

		if (gpu1Id) {
			const { response } = await api.gpu({ id: gpu1Id }).delete();
			expect(response.ok).toBeTrue();
		}

		if (gpu2Id) {
			const { response } = await api.gpu({ id: gpu2Id }).delete();
			expect(response.ok).toBeTrue();
		}
	});
});
