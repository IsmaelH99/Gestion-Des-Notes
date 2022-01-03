import _ from "lodash";
import { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

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
	const navigator = useNavigate();

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

	let lesNotesCards = rechercher(rech, _.sortBy(notes, "title")).map(
		(note, i) => {
			return (
				<div>
					<div
						className={`app-sidebar-note ${note.id === activeNote && "active"}`}
						onClick={() => setActiveNote(note.id)}
					>
						<div key={"carnets-" + i} className="mt-3 ">
							<div className="col-md-12">
								<div className="card h-100">
									<div className="card-header text-center">
										<b>{note.title}</b>
									</div>
									<div className="card-body text-white bg-secondary">
										<h5 className="card-title">{note.categorie}</h5>
										<p>{note.body && note.body.substr(0, 50) + "..."}</p>
										<h7 classNameName="note-meta">
											Modefié le{" "}
											{new Date(note.lastModified).toLocaleDateString("en-GB", {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</h7>
									</div>
								</div>
							</div>
							<button
								className="btn btn-danger mt-2"
								onClick={() => OnDeleteNote(note.id)}
							>
								Supprimer
							</button>
						</div>
					</div>
				</div>
			);
		}
	);

	function switchToList() {
		navigator("/carnet/:id");
	}

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
								<button
									type="button"
									onClick={() => switchToList()}
									class="btn btn-success"
								>
									Switch
								</button>
							</div>
						)}
					</div>
				</div>
			)}
			<div class="scrollbar scrollbar-primary">
				<div class="force-overflow cartside">{lesNotesCards}</div>
			</div>
		</div>
	);
}

export default Sidebar;
