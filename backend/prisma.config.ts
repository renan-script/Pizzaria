import "dotenv/config";
import { defineConfig, env } from "prisma/config"; // 1. Adicione o 'env' aqui

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), // 2. Use o helper direto aqui
  },
});