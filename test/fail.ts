import { expect } from "bun:test";

export const fail = () => {
	expect(false).toBeTrue();
};
