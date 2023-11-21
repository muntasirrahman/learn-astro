import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import * as schema from "./schema";

const client = new Client({
    connectionString: import.meta.env.DATABASE_URL
    //connectionString: process.env.DATABASE_URL
});

client.connect();

export const psydb = drizzle(client, { schema: schema });

