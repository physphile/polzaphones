import type { ToWhere, ToQuery, ToPrisma } from "./types";
import { LIMIT } from "./constants";

const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<T>;
const uncapitalize = <T extends string>(s: T) => (s[0].toLowerCase() + s.slice(1)) as Uncapitalize<T>;

export const toQuery = <T extends Record<string, any>, E extends keyof T = never>(d: T, excludes: E[] = []) =>
	Object.keys(d).reduce(
		(acc, key) =>
			!excludes.includes(key as E) && (d[key].type === "number" || d[key].type === "integer")
				? { ...acc, [`min${capitalize(key)}`]: d[key], [`max${capitalize(key)}`]: d[key] }
				: { ...acc, [key]: d[key] },
		{}
	) as ToQuery<T, E>;

export const toWhere = <T extends Record<string, any>, E extends keyof T = never>(query: T, excludes: E[] = []) =>
	Object.keys(query).reduce((acc, key) => {
		if (excludes.includes(key as E)) return { ...acc, [key]: query[key] };
		const unprefix = uncapitalize(key.slice(3));
		if (key.startsWith("min")) {
			if (!acc[unprefix]) acc[unprefix] = {};
			acc[unprefix].gte = query[key];
		} else if (key.startsWith("max")) {
			if (!acc[unprefix]) acc[unprefix] = {};
			acc[unprefix].lte = query[key];
		} else if (typeof query[key] === "string") {
			acc[key] = { contains: query[key] };
		} else {
			acc[key] = query[key];
		}
		return acc;
	}, {} as Record<string, any>) as ToWhere<T, E>;

export const toPrisma = <T extends Record<string, any>, E extends keyof T = never>(
	{ orderBy, order, offset, limit, ...query }: T,
	excludes: E[] = []
) =>
	({
		where: Object.keys(query).length ? toWhere(query as Record<string, any>, excludes as string[]) : undefined,
		orderBy: orderBy
			? {
					[orderBy]: order,
			  }
			: undefined,
		skip: offset,
		take: limit ?? LIMIT,
	} as ToPrisma<T, E>);
