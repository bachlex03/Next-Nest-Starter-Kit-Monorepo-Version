import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
import path from "path";

const rootPath = path.resolve(__dirname, "../../../");

console.log("rootPath", rootPath);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("test", `${rootPath}/.env.${process.env.NODE_ENV}`);

// Load .env.dev from the root of the monorepo
dotenv.config({
  path: `${rootPath}/.env.${process.env.NODE_ENV}`,
});

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
console.log("process.env.POSTGRES_HOST", process.env.POSTGRES_HOST);
console.log("process.env.POSTGRES_PORT", process.env.POSTGRES_PORT);
console.log("process.env.POSTGRES_DATABASE", process.env.POSTGRES_DATABASE);
console.log("process.env.POSTGRES_USER", process.env.POSTGRES_USER);
console.log("process.env.POSTGRES_PASSWORD", process.env.POSTGRES_PASSWORD);

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schemas/**/*.ts",
  out: "./migrations",
  dbCredentials: {
    ssl: false,
    host: process.env.POSTGRES_HOST!,
    port: parseInt(process.env.POSTGRES_PORT!),
    database: process.env.POSTGRES_DATABASE!,
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
  },
});
