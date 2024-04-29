import pg from "pg";

const { Pool } = pg;

const password = process.env.DB_PASSWORD;
console.log("DB_PASSWORD:", password); // Debug log

const con = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default con;