import _ from "lodash";
import { useState } from "react";

function Sidebar({
	notes,
	OnAddNote,
	OnDeleteNote,
	activeNote,
	setActiveNote,
	carnets,
	carnet,
}) {
	const [rech, setRech] = useState("");

	function rechercher(strRech, liste) {
		let tmpRech = strRech.toLowerCase();
		let res = liste.filter((note) => {
			let lowerNoteTitle = note.title.toLowerCase();
			let lowerNoteBody = note.body.toLowerCase();
			let lowerNoteCategorie = note.categorie.toLowerCase();

			if (lowerNoteTitle.indexOf(tmpRech) > -1) return note;
			if (lowerNoteBody.indexOf(tmpRech) > -1) return note;
			if (lowerNoteCategorie.indexOf(tmpRech) > -1) return note;
		});
		return res;
	}

	let lesNotes = rechercher(rech, _.sortBy(notes, "title")).map((note) => {
		return (
			<div
				className={`app-sidebar-note ${note.id === activeNote && "active"}`}
				onClick={() => setActiveNote(note.id)}
			>
				<div className="app-sidebar-title">
					<h5>{note.title}</h5>
					<button
						type="button"
						onClick={() => OnDeleteNote(note.id)}
						class="btn btn-danger"
					>
						Supprimer
					</button>
				</div>
				<div>
					<h6>{note.categorie}</h6>
				</div>

				<p>{note.body && note.body.substr(0, 50) + "..."}</p>
				<small className="note-meta">
					Derniére modification{" "}
					{new Date(note.lastModified).toLocaleDateString("en-GB", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</small>
			</div>
		);
	});

	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>Notes de {carnet && carnet.titreCarnet}</h1>

				<button type="button" onClick={OnAddNote} class="btn btn-success">
					Ajouter
				</button>
			</div>
			{notes.length > 0 && (
				<div className="input-group mb-3">
					<div className="container">
						<input
							type="search"
							value={rech}
							onChange={(e) => {
								setRech(e.target.value);
							}}
							className="form-control"
							placeholder="Rechercher ..."
						/>

						{notes.length > 0 && (
							<div className="mb-4 mt-3">
								<b>Nombre de notes totales </b>
								<span className="nb-pro badge rounded-pill bg-info text-dark">
									<b>{notes.length}</b>
								</span>
							</div>
						)}
					</div>
				</div>
			)}
			<div class="scrollbar scrollbar-primary">
				<div class="force-overflow">{lesNotes}</div>
			</div>
		</div>
	);
}

export default Sidebar;
