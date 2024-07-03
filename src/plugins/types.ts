import { t, type TSchema } from "elysia";

export const GetQuery = t.Object({
  limit: t.Optional(t.Integer()),
  offset: t.Optional(t.Integer()),
  orderBy: t.Optional(t.String()),
  order: t.Optional(t.Union([t.Literal("asc"), t.Literal("desc")])),
});

export const params = t.Object({
  id: t.Integer(),
});
