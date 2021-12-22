import { useState } from "react";
import NavBar from "../navbar/NavBar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { v4 as uuidv4 } from "uuid";

export default function AjouterNotes() {
	const [notes, setNotes] = useState([]);
	const [noteActive, setNoteActive] = useState(false);

	const AjoutNotes = () => {
		const nouvelleNote = {
			id: uuidv4(),
			title: "Note sans titre",
			body: "",
			derniereModification: Date.now(),
		};
		setNotes([nouvelleNote, ...notes]);
	};

	const SupprimerNotes = (suppId) => {
		setNotes(notes.filter((note) => note.id !== suppId));
	};

	const ModifierNotes = (modifNote) => {
		const modification = notes.map((note) => {
			if (note.id === noteActive) {
				return modifNote;
			}
			return note;
		});
		setNotes(modification);
	};

	const getNoteActive = () => {
		return notes.find((note) => note.id === noteActive);
	};

	return (
		<div>
			<NavBar />
			<div class="container">
				<div class="row align-items-center">
					<div class="col-5">
						<Sidebar
							notes={notes}
							AjoutNotes={AjoutNotes}
							SupprimerNotes={SupprimerNotes}
							noteActive={noteActive}
							setNoteActive={setNoteActive}
						/>
					</div>
					<div class="col-7">
						<Main noteActive={getNoteActive()} ModifierNotes={ModifierNotes} />
					</div>
				</div>
			</div>
		</div>
	);
}
