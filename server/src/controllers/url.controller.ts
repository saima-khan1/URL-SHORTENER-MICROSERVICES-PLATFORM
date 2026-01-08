import { FastifyReply, FastifyRequest } from "fastify";
import {
  createUrl,
  findByShortCode,
  incrementClicks,
} from "../services/url.service.js";
export const createShortUrl = async (
  req: FastifyRequest<{ Body: { originalUrl: string } }>,
  reply: FastifyReply
) => {
  const { originalUrl } = req.body;
  const url = await createUrl(originalUrl);
  reply.code(201).send(url);
};

export const redirectShortUrl = async (
  req: FastifyRequest<{ Params: { code: string } }>,
  reply: FastifyReply
) => {
  const { code } = req.params;
  const url = await findByShortCode(code);
  if (!url) {
    return reply.code(404).send({ message: "URL NOT FOUND" });
  }

  await incrementClicks(code);
  reply.send(url);
};

export const getUrlStads = async (
  req: FastifyRequest<{ Params: { code: string } }>,
  reply: FastifyReply
) => {
  const { code } = req.params;
  const url = await findByShortCode(code);
  if (!url) {
    return reply.code(404).send({ message: "URL NOT FOUND" });
  }

  reply.send(url);
};
