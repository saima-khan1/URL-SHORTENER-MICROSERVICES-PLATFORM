import { FastifyInstance } from "fastify";
import { createShortUrl } from "../controllers/url.controller.js";

export const urlRoutes = (app: FastifyInstance) => {
  app.post("/shorten", createShortUrl);
};
