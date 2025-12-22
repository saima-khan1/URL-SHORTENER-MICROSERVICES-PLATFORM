import pool from "../db.js";
import generateShortCodeUrl from "../utils.ts/shortCode.js";

export const createUrl = async (originalUrl: string) => {
  const shortCode = generateShortCodeUrl();

  const result = await pool.query(
    `
    INSERT INTO urls (short_code, original_url)
    VALUES ($1, $2)
    RETURNING *
    `,
    [shortCode, originalUrl]
  );

  return result.rows[0];
};
