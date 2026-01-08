import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;
// import pkg from "pg";
// const { Pool } = pkg;

// const pool = new Pool({
//   user: process.env.DB_USER || "postgres",
//   host: process.env.DB_HOST || "localhost",
//   database: process.env.DB_NAME || "url_shortener",
//   password: process.env.DB_PASSWORD || "postgres",
//   port: Number(process.env.DB_PORT) || 5432,
// });
// console.log("DB_NAME =", process.env.DB_NAME);

// export default pool;
