import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import timestampColumn from "./common/timestamp.column";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  age: integer("age").notNull(),
  address: text("address").notNull(),
  ...timestampColumn,
});
