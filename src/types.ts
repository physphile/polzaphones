import { t, type TSchema } from "elysia";
import { type TObject, type TNumber, type TInteger, type TProperties } from "@sinclair/typebox";

export type ToSchema<T> = Partial<{ [K in keyof T]: TSchema }>;

type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer I) => void
	? I
	: never;

type Prefix<T extends string, S extends Lowercase<string>> = `${S}${Capitalize<T>}`;

export type StringKeys<T> = keyof T & string;

type AddPrefix<
	T extends TProperties,
	M extends TSchema,
	P extends Lowercase<string>,
	E extends keyof T = never,
> = UnionToIntersection<
	{
		[K in keyof T]: K extends Exclude<StringKeys<T>, E>
			? T[K] extends M
				? { [A in Prefix<K, P>]: T[K] }
				: { [A in K]: T[K] }
			: { [A in K]: T[K] };
	}[keyof T]
>;

export type ToQuery<T extends Record<string, any> = {}, E extends keyof T = never> = AddPrefix<
	T,
	TNumber | TInteger,
	"min" | "max",
	E
>;

export type ToWhere<T extends Record<string, any>, E extends keyof T = never> = UnionToIntersection<
	{
		[K in keyof T]: K extends Exclude<StringKeys<T>, E>
			? K extends `${"min" | "max"}${infer X}`
				? { [A in Uncapitalize<X>]: { gte: T[Prefix<X, "min">]; lte: T[Prefix<X, "max">] } }
				: { [A in K]: T[K] }
			: { [A in K]: T[K] };
	}[keyof T]
>;

export type ToPrisma<T extends Record<string, any>, E extends keyof T = never> = {
	orderBy?: {
		[K in string]: "asc" | "desc";
	};
	take?: number;
	skip?: number;
	where: ToWhere<T, E>;
};
