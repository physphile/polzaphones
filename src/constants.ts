import { t } from "elysia";

export const pageQuery = t.Object({
	limit: t.Numeric(),
	offset: t.Numeric(),
	orderBy: t.String(),
	order: t.Union([t.Literal("asc"), t.Literal("desc")]),
});

export const params = t.Object({
	id: t.Numeric(),
});

export const LIMIT = 100;

export const URL_PATTERN =
	/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/.toString();

export const HEX_PATTERN = /#[\da-fA-F]{6}/.toString();

export const DATE_PATTERN = /\d{4}-\d{2}-\d{2}/.toString();
