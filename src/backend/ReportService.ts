import { findMemberById } from "./ReportRepository";

export type WarkopMember = {
	id: number;
	name: string;
	iq: number;
	school?: string;
	imageUrl?: string;
};

export const readMemberData = (memberId: number) => {
	const member = findMemberById(memberId);
	// console.table(member);
	return member;
};
