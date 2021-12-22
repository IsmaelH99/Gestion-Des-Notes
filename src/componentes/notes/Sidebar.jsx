import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar({
	notes,
	OnAddNote,
	OnDeleteNote,
	activeNote,
	setActiveNote,
}) {
	const navigator = useNavigate();
	const [rech, setRech] = useState("");

	useEffect(() => {
		if (notes === false) navigator("/");
	}, [notes, navigator]);

	function rechercher(strRech, notes) {
		let tmpRech = strRech.toLowerCase();
		let res = notes.filter((note) => {
			let lowerNote = note.toLowerCase();
			if (lowerNote.indexOf(tmpRech) > -1) return note;
		});
		return res;
	}

	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>Notes</h1>
				<button onClick={() => navigator("/")}>Retour</button>
				<button onClick={OnAddNote}>Ajouter</button>
			</div>
			{notes.length > 0 && (
				<div className="input-group mb-3">
					<input
						type="search"
						value={rech}
						onChange={(e) => {
							setRech(e.target.value);
						}}
						className="form-control"
						placeholder="Rechercher ..."
					/>
				</div>
			)}
			<div className="app-sidebar-notes">
				{_.sortBy(notes, "title").map((note) => (
					<div
						className={`app-sidebar-note ${note.id === activeNote && "active"}`}
						onClick={() => setActiveNote(note.id)}
					>
						<div className="app-sidebar-title">
							<strong>{note.title}</strong>
							<button
								onClick={() => OnDeleteNote(note.id)}
								className=" justify-content-between align-items-end"
							>
								Supprimer
							</button>
						</div>
						<p>{note.body && note.body.substr(0, 100) + "..."}</p>
						<small className="note-meta">
							Derniére modification{" "}
							{new Date(note.lastModified).toLocaleDateString("en-GB", {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</small>
					</div>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
