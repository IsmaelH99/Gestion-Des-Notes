import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotesCarnets() {
	const { id } = useParams();
	console.log(id);
	const [carnets, setCarnets] = useState([]);
	const [carnet, setCarnet] = useState({});
	const [notes, setNotes] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {
		let datas = localStorage.getItem("carnets");
		console.log("datas", datas);
		setCarnets(JSON.parse(datas));
		// let data = carnets.find((x) => x.id === id);
		// setCarnet(data);
	}, []);
	useEffect(() => {
		let data = carnets.find((x) => x.id === id);
		setCarnet(data);
		// setNotes(data.notesCarnet);
		console.log(data);
	}, [carnets]);
	console.log(carnet);

	function AjoutNote() {
		let tmp = { ...carnet };
		tmp.notesCarnet.push({
			titrenote: text,
			categorie: "Categorie1",
		});
		setCarnet(tmp);
		setNotes(carnet.notesCarnet);
		carnets.forEach((el) => {
			if (el.id === id) el = carnet;
		});
		localStorage.setItem("carnets", JSON.stringify(carnets));

		console.log(carnet);
	}
	return (
		<div>
			<h1>{carnet && carnet.titreCarnet}</h1>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={() => AjoutNote()}>Ajouter</button>
			{notes.map((el) => {
				return (
					<div>
						<h2>{el.titrenote}</h2>
						<h2>{el.categorie}</h2>
					</div>
				);
			})}
		</div>
	);
}
