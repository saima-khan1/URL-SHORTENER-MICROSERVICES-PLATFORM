import { FastifyInstance } from "fastify";
import {
  createShortUrl,
  getUrlStads,
  redirectShortUrl,
} from "../controllers/url.controller.js";

export const urlRoutes = (app: FastifyInstance) => {
  app.post("/shorten", createShortUrl);
  app.get("/:code", redirectShortUrl);
  app.get("/stads/:code", getUrlStads);
};
