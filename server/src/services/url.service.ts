import pool from "../db.js";
import generateShortCodeUrl from "../utils/shortCode.js";

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

export const findByShortCode = async (code: string) => {
  const result = await pool.query(`SELECT * FROM urls WHERE short_code = $1`, [
    code,
  ]);
  return result.rows[0];
};

export const incrementClicks = async (code: string) => {
  await pool.query(
    `UPDATE urls SET clicks = clicks + 1 WHERE short_code = $1`,
    [code]
  );
};
