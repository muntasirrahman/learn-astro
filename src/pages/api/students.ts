import type { APIContext, APIRoute } from "astro";
import type { Peserta } from "../../index";

export const POST: APIRoute = async (context: APIContext) => {
	const newStudent: Peserta = await context.request.json();

	console.table(newStudent);

	// response headers
	const headers = {
		status: 200,
		headers: { "content-type": "application/json" },
	};

	const student1: Peserta = {
		nama: "Nanu",
		iq: 120,
		sekolah: "SMP 1",
		lulus: true,
	};
	const student2: Peserta = {
		nama: "Temmy",
		iq: 120,
		sekolah: "SMP 2",
		lulus: true,
	};

	const body = {
		message: "A new student is added, here is the list of students",
		students: [newStudent, student1, student2],
	};

	const bodyInJson = JSON.stringify(body);

	const response = new Response(bodyInJson, headers);
	return response;
};
