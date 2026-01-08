import crypto from "crypto";

const generateShortCodeUrl = (length = 7): string => {
  return crypto.randomBytes(length).toString("base64url").slice(0, length);
};

export default generateShortCodeUrl;
