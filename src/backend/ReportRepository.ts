import type { WarkopMember } from "./ReportService";

export const findMemberById = (memberId: number) => {
	const dono: WarkopMember = {
		id: 1,
		name: "Dono",
		iq: 100,
		school: "SMA 1 Jakarta",
		imageUrl:
			"https://1.bp.blogspot.com/-pG5Lfr2Aid4/YAA5EI_QvhI/AAAAAAAAAvI/8arLlnPZ5ZkcVMa0ZmLIw1cdT9GDfZc8QCLcBGAsYHQ/s853/047438300_1539318646-Dono1.jpg",
	};

	return dono;
};
