import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "../src";
import { fail } from "./fail";
import { SocVendor } from "@prisma/client";

const POSTGRES_MAX_INTEGER = 2147483647;
const api = treaty(app);

let smartphoneId: number | undefined;
let coreId: number | undefined;
let gpuId: number | undefined;
let socId: number | undefined;
let cameraId: number | undefined;
let storeId: number | undefined;
let featureId: number | undefined;

const testCore = {
	name: "Test Core",
};

const testGpu = {
	name: "Test Gpu",
};

const testCamera = {
	name: "Test Camera",
};

const testSoc = {
	name: "Test Soc",
};

describe("Проверка smartphonePlugin", () => {
	it("Создает Smartphone", async () => {
		const { data: gpu } = await api.gpu.post(testGpu);
		const { data: core } = await api.core.post(testCore);
		coreId = core?.id;
		gpuId = gpu?.id;
		if (!coreId || !gpuId) return fail();

		const { data: camera } = await api.camera.post(testCamera);
		const { data: soc } = await api.soc.post(testSoc);
		cameraId = camera?.id;
		socId = soc?.id;
		if (!cameraId || !socId) return fail();

		const { data: smartphone } = await api.camera.post({
			name: "Test Smartphone",
			soc: socId,
			cameras: [{}],
		});
	});
	it("Получает все Smartphone", async () => {
		const { data } = await api.smartphone.get({ query: { orderBy: "createdAt", order: "desc" } });
		const i = data?.findIndex(c => c.id === smartphoneId);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Учитывает query-параметры", async () => {
		const { data } = await api.smartphone.get({ query: { orderBy: "createdAt", order: "desc" } });
		const i = data?.findIndex(c => c.id === smartphoneId);
		expect(i).toBeNumber();
		expect(i).not.toBe(-1);
	});
	it("Получает Smartphone по id", async () => {
		if (!smartphoneId || !coreId || !gpuId) return fail();
		const { data } = await api.smartphone({ id: smartphoneId.toString() }).get();

		expect(data?.name).toBe("Test Smartphone");
		expect(data?.gpuCores).toBe(5);
		expect(data?.gpuFrequency).toBe(1389);
		expect(data?.gpu?.id).toBe(gpuId);
		expect(data?.gpu?.series).toBe("Unknown");
		expect(data?.gpu?.name).toBe(testGpu.name);
		expect(data?.gpu?.vendor).toBe("Unknown");
		expect(data?.nanometers).toBe(5);
		expect(data?.vendor).toBe("Apple");
		expect(data?.cores.length).toBe(1);
		expect(data?.cores?.[0].frequency).toBe(3300);
		expect(data?.cores?.[0].number).toBe(8);
		expect(data?.cores?.[0].core.name).toBe(testCore.name);
		expect(data?.cores?.[0].core.id).toBe(coreId);
		expect(data?.cores?.[0].core.vendor).toBe("Unknown");
		expect(data?.cores?.[0].core.series).toBe("Unknown");
	});
	it("Возвращает ошибку 404", async () => {
		const { status } = await api.smartphone({ id: POSTGRES_MAX_INTEGER.toString() }).get();
		expect(status).toBe(404);
	});
	it("Удаляет Smartphone", async () => {
		if (smartphoneId) {
			const { response } = await api.smartphone({ id: smartphoneId.toString() }).delete();
			const { status } = await api.smartphone({ id: smartphoneId.toString() }).get();
			expect(status).toBe(404);
			expect(response.ok).toBeTrue();
		}
		if (coreId) {
			const { response } = await api.core({ id: coreId }).delete();
			expect(response.ok).toBeTrue();
		}

		if (gpuId) {
			const { response } = await api.gpu({ id: gpuId }).delete();
			expect(response.ok).toBeTrue();
		}
	});
});
