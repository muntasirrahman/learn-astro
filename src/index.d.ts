export type Peserta = {
	nama: string;
	iq: number;
	sekolah: string;
	lulus?: boolean;
};

export type Token = {
	token: string;
};

export type Candidate = {
	name: string;
	jobTitle: string;
	birthDate: string;
};

export type CandidateResponse = {
	message: string;
	candidate: Candidate;
};
