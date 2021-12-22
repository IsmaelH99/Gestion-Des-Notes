import "./Sidebar.css";
export default function Sidebar({
	notes,
	AjoutNotes,
	SupprimerNotes,
	noteActive,
	setNoteActive,
}) {
	return (
		<div>
			<div class="list-group list-group-flush border-bottom scrollarea mt-5">
				<div class="d-flex w-100 align-items-center justify-content-between">
					<h1>Notes</h1>
					<button type="button" onClick={AjoutNotes} class="btn btn-primary">
						Ajouter
					</button>
				</div>
			</div>

			{notes.map((note) => (
				<div
					className={`divHover ${note.id === noteActive && "active"}`}
					onClick={() => setNoteActive(note.id)}
				>
					<div class="d-flex w-100 align-items-center  justify-content-between active">
						<strong class="mb-1">{note.title}</strong>
						<button
							type="button"
							onClick={() => SupprimerNotes(note.id)}
							class="btn btn-danger"
						>
							Supprimer
						</button>
					</div>
					<div class="col-10 mb-1 small">
						<p>{note.body && note.body.substr(0, 50) + "..."}</p>
						<small>
							Derniere Modification{" "}
							{new Date(note.derniereModification).toLocaleDateString("en-GB", {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</small>
					</div>
				</div>
			))}
		</div>
	);
}
