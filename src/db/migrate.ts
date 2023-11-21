import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import {configDotenv} from "dotenv";
import pg from "pg";



const { Pool } = pg;

configDotenv()

const pool = new Pool({
    connectionString:process.env.DATABASE_URL
});

const psydb = drizzle(pool)


async function main(){
    console.log("Database url adalah: " + process.env.DATABASE_URL)
    console.log("migration started...")
    await migrate(psydb,{migrationsFolder:"drizzle"})
    console.log("migration ended...")
    process.exit(0);

}

main().catch((err) => {
    console.log(err);
    process.exit(0);
});