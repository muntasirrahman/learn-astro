import { useState } from "react";
import type { Candidate } from "..";

export const TokenUser = () => {
	const [token, setToken] = useState("");
	const [candidate, setCandidate] = useState<Candidate>({} as Candidate);
	const [received, setReceived] = useState(false);

	const handleToken = (event: React.ChangeEvent<HTMLInputElement>) => {
		const tokenBaru = event.target.value;
		setToken(tokenBaru);
	};

	const handleButtonClick = () => {
		const tokenData = { token };
		const tokenDataInJson = JSON.stringify(tokenData);

		fetch("http://localhost:4321/api/authenticator", {
			method: "POST",
			body: tokenDataInJson,
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					alert("Token yang anda masukkan salah.");
				}
			})
			.then((dataFromBackend) => {
				setReceived(true);
				const candidateData = dataFromBackend.candidate;
				setCandidate(candidateData);
			})
			.catch((error) => {
				console.error(error);
				alert("Gagal, karena: " + error.message);
			});
	};

	const handleButtonCandidateClick = () => {
		setReceived(false);
	};

	return (
		<div className="container mx-auto">
			{received === false && (
				<div id="TokenForm">
					<div>Token</div>
					<div className="mt-4">
						<input
							className="p-2"
							type="text"
							placeholder="Ketikkan token disini"
							value={token}
							onChange={handleToken}
						/>
					</div>
					<div className="mt-4">
						<button
							onClick={handleButtonClick}
							className="inline-block px-5 py-3
                        bg-blue-400 text-white rounded-lg shadow-lg
                        tracking-wider text-sm"
						>
							Enter
						</button>
					</div>
				</div>
			)}
			{received && (
				<div id="Candidate">
					<div className="p-2">Nama: {candidate.name}</div>
					<div className="p-2">Jabatan: {candidate.jobTitle}</div>
					<div className="p-2">Tanggal Lahir: {candidate.birthDate}</div>
					<div className="mt-4">
						<button
							onClick={handleButtonCandidateClick}
							className="inline-block px-5 py-3
                    bg-blue-400 text-white rounded-lg shadow-lg
                    tracking-wider text-sm"
						>
							Mulai Tes
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
