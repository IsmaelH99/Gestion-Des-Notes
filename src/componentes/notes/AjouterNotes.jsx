import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import "./AjouterNotes.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AjouterNotes() {
	const { id } = useParams();

	const [carnet, setCarnet] = useState({});
	const [carnets, setCarnets] = useState([]);

	useEffect(() => {
		let datas = localStorage.getItem("carnets");
		setCarnets(JSON.parse(datas));
	}, []);
	useEffect(() => {
		let data = carnets.find((x) => x.id === id);
		setCarnet(data);
	}, [carnets]);

	const [categorie, setCategorie] = useState({});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let datas = localStorage.getItem("categories");
		setCategories(JSON.parse(datas));
	}, []);
	useEffect(() => {
		let data = categories.find((x) => x.id === id);
		setCategorie(data);
	}, [categories]);

	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	useEffect(() => {
		let notesBDD = localStorage.getItem("notes");
		if (notesBDD === null) {
			localStorage.setItem("notes", JSON.stringify([]));
			notesBDD = [];
		}
		setNotes(JSON.parse(notesBDD));
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const OnAddNote = () => {
		const newNote = {
			idCarnet: { id },
			id: notes.length + 1,
			title: "Note sans titre",
			categorie: "",
			body: "",
			lastModified: Date.now(),
		};
		setNotes([newNote, ...notes]);
	};

	const OnDeleteNote = (idToDelete) => {
		setNotes(notes.filter((note) => note.id !== idToDelete));
	};
	const OnUpdateNote = (updatedNote) => {
		const updateNotesArray = notes.map((note) => {
			if (note.id === activeNote) {
				return updatedNote;
			}
			return note;
		});
		setNotes(updateNotesArray);
	};

	const getActiveNote = () => {
		return notes.find((note) => note.id === activeNote);
	};

	return (
		<div>
			<NavBar />
			<div className="AjouterNotes">
				<Sidebar
					notes={notes}
					OnAddNote={OnAddNote}
					OnDeleteNote={OnDeleteNote}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
				/>
				<Main
					activeNote={getActiveNote()}
					OnUpdateNote={OnUpdateNote}
					categorie={categorie}
					categories={categories}
				/>
			</div>
		</div>
	);
}

export default AjouterNotes;
