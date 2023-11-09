import type { APIContext, APIRoute } from "astro";

export const POST: APIRoute = async (context: APIContext) => {
  
	const response = new Response("Hello World", {
		status: 200,
		headers: { "content-type": "text/html" },
	});
	return response;
};
