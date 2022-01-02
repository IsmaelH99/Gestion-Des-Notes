import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import { v4 as uuidv4 } from "uuid";
import "./NoteFin.css";
export default function NotesDuCarnet() {
	const { id } = useParams();
	console.log(id);

	const [carnet, setCarnet] = useState({});
	const [carnets, setCarnets] = useState([]);
	const [notes, setNotes] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {
		let datas = localStorage.getItem("carnets");
		setCarnets(JSON.parse(datas));
	}, []);
	useEffect(() => {
		let data = carnets.find((x) => x.id === id);
		setCarnet(data);
	}, [carnets]);

	const AjoutNotes = () => {
		let tmp = { ...carnet };
		tmp.notesCarnet.push({
			titre: "Note sans titre",
			preview: "...",
			DerniereModification: Date.now(),
		});
		setCarnet(tmp);
		setNotes(carnet.notesCarnet);
		carnets.forEach((el) => {
			if (el.id === id) el = carnet;
		});
	};

	function supprimer(carnet) {
		let tmp = { ...carnets };
		const indice = carnets.indexOf(carnet);
		console.log(indice);
		if (indice > -1) tmp.splice(indice, 1);
		setCarnets(tmp);
	}
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="row align-items-center">
					<div className="col-5">
						<div className="list-group list-group-flush border-bottom scrollarea mt-5">
							<div className="d-flex w-100 align-items-center justify-content-between mt-5">
								<h1>Notes de {carnet && carnet.titreCarnet}</h1>
								<button
									type="button"
									onClick={AjoutNotes}
									className="btn btn-primary"
								>
									Ajouter
								</button>
							</div>
						</div>
						<div>
							{notes.map((note) => (
								<div>
									<div className="d-flex w-100 align-items-center  justify-content-between active">
										<strong className="mb-1">{note.titre}</strong>
										<button
											type="button"
											onClick={() => supprimer(carnet)}
											className="btn btn-danger"
										>
											Supprimer
										</button>
									</div>
									<div className="col-10 mb-1 small">
										<p>{note.preview}</p>
										<small>
											Derniere Modification{" "}
											{new Date(note.DerniereModification).toLocaleDateString(
												"en-GB",
												{
													hour: "2-digit",
													minute: "2-digit",
												}
											)}
										</small>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-7 Notefinal">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
