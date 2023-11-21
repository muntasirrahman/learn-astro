import { sql } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
    creation: timestamp('creation').defaultNow(),
    fullName: text('fullname'),
    email: text('email'),
    company: text('company')
});