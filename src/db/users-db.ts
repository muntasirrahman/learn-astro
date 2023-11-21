import { psydb } from "./index";
import { users, type User } from "./schema";

export const readUserFromDb = async () => {
    return await psydb.select().from(users)
}

export const addUserToDb = async (fromBrowser: User) => {
    const fromDb = await psydb
        .insert(users)
        .values({
            fullName: fromBrowser.fullName,
            phone: fromBrowser.phone,
        })
        .returning();
    const newUser = JSON.stringify(fromDb); 
    console.log(`U: ${newUser}`);
    return newUser;
}