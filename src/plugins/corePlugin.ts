import Elysia, { t } from "elysia";
import { GetQuery, params } from "./types";
import { $Enums, type Core } from "@prisma/client";
import { prisma } from "../../prisma";

const endpoint = "/core";

const body = t.Object({
  name: t.String(),
  series: t.Optional(t.Enum($Enums.CoreSeries)),
  vendor: t.Optional(t.Enum($Enums.CoreVendor)),
});
const partial = t.Partial(body);

export const corePlugin = new Elysia({ name: "corePlugin" })
  .post(
    endpoint,
    ({ body: { name, series, vendor } }) =>
      prisma.core.create({
        data: {
          name,
          series,
          vendor,
        },
      }),
    { body }
  )
  .get(
    endpoint,
    ({ query: { name, series, vendor, limit, offset, order, orderBy } }) =>
      prisma.core.findMany({
        orderBy: orderBy
          ? {
              [orderBy]: order,
            }
          : undefined,
        take: limit,
        skip: offset,
        where: {
          name,
          series,
          vendor,
        },
      }),
    {
      query: t.Composite([GetQuery, partial]),
    }
  )
  .get(
    `${endpoint}/:id`,
    ({ params: { id } }) => prisma.core.findUnique({ where: { id } }),
    { params }
  )
  .patch(
    `${endpoint}/:id`,
    ({ params: { id }, body: { name, series, vendor } }) =>
      prisma.core.update({
        where: { id },
        data: { name, series, vendor },
      }),
    { params, body: partial }
  )
  .delete(`${endpoint}/:id`, () => {}, { params });
