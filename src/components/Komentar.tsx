import { useState } from "react";
import type { Peserta } from "../index";

export const Komentar = () => {
	const [nama, setNama] = useState("");
	const [iq, setIq] = useState(0);
	const [sekolah, setSekolah] = useState("");
	const [lulus, setLulus] = useState(false);
	const [komentar, setKomentar] = useState("");

	const [muridMurid, setMuridMurid] = useState<Peserta[]>([]);

	// nama
	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const namaBaru = event.target.value;
		setNama(namaBaru);
	};

	const handleIqChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const iqBaru = event.target.value;
		if (iqBaru !== "") {
			const nilaiIq = parseInt(iqBaru);
			setIq(nilaiIq);
		}
	};

	const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sekolahBaru = event.target.value;
		setSekolah(sekolahBaru);
	};

	const handleGraduationChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const lulus = event.target.checked;
		setLulus(lulus);
	};

	const handleButtonClick = () => {
		const newStudent: Peserta = {
			nama,
			iq,
			sekolah,
			lulus,
		};

		console.table(newStudent);

		const newStudentInJson = JSON.stringify(newStudent);
		console.log(`Data dalam format JSON: ${newStudentInJson}`);

		fetch("http://localhost:4321/api/students", {
			method: "POST",
			body: newStudentInJson,
		})
			.then((response) => {
				if (response.ok) {
					return response.json(); // ubah dari string JSON ke object
				} else {
					alert("Gagal menambahkan murid baru");
				}
			})
			.then((responseData) => {
				// kalau data berhasil dirubah dari string JSON ke object
				const pesan: string = responseData.message;
				console.log(`Pesan dari server: ${pesan}`);

				const students: Peserta[] = responseData.students;
				setMuridMurid(students);
			})
			.catch((error) => {
				console.error(error);
				alert("Gagal, karena: " + error.message);
			});
	};

	return (
		<div className="p-4">
			<div className="text-4xl">Daftar Murid-Murid</div>
			<div className="container flex flex-row">
				<div className="container grid grid-cols-4 border-2">
					{muridMurid.map((student) => (
						<>
							<div className="p-2">{student.nama}</div>
							<div className="p-2">{student.iq}</div>
							<div className="p-2">{student.sekolah}</div>
							<div className="p-2">
								{student.lulus ? "Sudah lulus" : "Belum lulus"}
							</div>
						</>
					))}
				</div>
			</div>
			<div className="mt-">
				<input
					className="p-2"
					type="text"
					placeholder="Nama murid"
					value={nama}
					onChange={handleNameChange}
				/>
			</div>
			<div className="mt-2">
				<input
					className="p-2"
					type="text"
					placeholder="IQ-mu"
					value={iq}
					onChange={handleIqChange}
				/>
			</div>
			<div className="mt-2">
				<input
					className="p-2"
					type="text"
					placeholder="Sekolah-mu"
					value={sekolah}
					onChange={handleSchoolChange}
				/>
			</div>
			<div className="mt-2">
				<input
					className="p-2"
					type="checkbox"
					placeholder="Lulus"
					checked={lulus}
					onChange={handleGraduationChange}
				/>
				&nbsp; {lulus ? "Sudah lulus" : "Belum lulus"}
			</div>
			<div className="mt-2">
				<button
					className="p-2 bg-blue-500 text-white rounded-md"
					onClick={handleButtonClick}
				>
					Tambah Murid Baru
				</button>
			</div>
		</div>
	);
};
