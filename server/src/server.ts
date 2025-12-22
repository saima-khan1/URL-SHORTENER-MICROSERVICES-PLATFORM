import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import pool from "./db.js";
import { urlRoutes } from "./routes/url.routes.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: true,
});

fastify.register(urlRoutes);

fastify.get("/test-db", async () => {
  const res = await pool.query("SELECT NOW()");
  return { time: res.rows[0].now };
});

fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

fastify.get("/healthz", async () => ({ status: "ok" }));

try {
  await fastify.listen({ port: 3000, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
