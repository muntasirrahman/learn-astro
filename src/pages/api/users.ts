import type { User } from "../../db/schema";
import { addUserToDb, readUserFromDb } from "../../db/users-db";
import type { APIContext, APIRoute } from "astro";


export const GET: APIRoute = async ({ params, request }) => {
    
    const result = await readUserFromDb();

    const response = new Response(
      JSON.stringify(result),
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    console.log("GET response", response);
    return response;
};
  
export const POST: APIRoute = async (context: APIContext) => {
    try {
        const newUser:User = await context.request.json();
        
        addUserToDb(newUser);

        console.log(`Data from web browser: ${newUser}`);

        const body = {
            pesan: "Read successfully",
            newUser
        };
        
        const bodyInJson = JSON.stringify(body);
        
        const header = {
            status: 200,
            message: "Successfully read data",
        };

        return new Response(bodyInJson, header);

    } catch (error) {
        console.error(`PsyTest Error ${error}`);
        const errorBody = {
            pesan: "something wong"
        };
        const errorBodyInJson = JSON.stringify(errorBody);
        const header = {
            status: 404,
            message: "Blabla",
        };

        return new Response(errorBodyInJson, header);
    }
};