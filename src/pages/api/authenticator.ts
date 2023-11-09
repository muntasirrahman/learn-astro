import type { APIContext } from "astro";
import type { Candidate, Token } from "../..";

export const POST = async (context: APIContext) => {
    const newToken: Token = await context.request.json();

    console.table(newToken);

    const candidate: Candidate = {
        name: "Khalid",
        jobTitle: "Penyanyi",
        birthDate: "11-02-1998"

    };

    // response body
    const responseBody = {
        message:"New employee candidate has been added",
        candidate: candidate,
    };

    const responseBodyInJSON = JSON.stringify(responseBody);

    const headers = {
        status: 200,
        headers: { "content-type": "application/json" },
    };

    const response = new Response(responseBodyInJSON, headers)
    return response;
 }