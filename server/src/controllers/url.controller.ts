import { FastifyReply, FastifyRequest } from "fastify";
import { createUrl } from "../services/url.service.js";
export const createShortUrl = async (
  req: FastifyRequest<{ Body: { originalUrl: string } }>,
  reply: FastifyReply
) => {
  const { originalUrl } = req.body;
  const url = await createUrl(originalUrl);
  reply.code(201).send(url);
};
