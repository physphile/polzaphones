import { Elysia } from "elysia";
import { corePlugin } from "./plugins/corePlugin";

const port = 3000;

const app = new Elysia()
  .use(corePlugin)
  .listen(port, () => console.log(`Bun is listening port ${port}`));
