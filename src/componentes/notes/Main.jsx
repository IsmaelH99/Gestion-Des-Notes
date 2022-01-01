import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

function Main({ activeNote, OnUpdateNote }) {
	const [selectCategorie, setSelectCategorie] = useState("");
	useEffect(() => {
		let categoriesBDD = localStorage.getItem("categories");
		console.log(categoriesBDD);
	}, []);
	const OnEditField = (key, value) => {
		OnUpdateNote({
			...activeNote,
			[key]: value,
			lastModified: Date.now(),
		});
	};
	if (!activeNote)
		return <div className="no-active-note">Aucune note selectionnée</div>;
	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<div class="row">
					<div class="col">
						<label class="form-label">
							<b>Titre</b>
						</label>
						<input
							type="text"
							id="title"
							value={activeNote && activeNote.title}
							onChange={(e) => OnEditField("title", e.target.value)}
							class="form-control"
						/>
					</div>
					<div class="col">
						<label class="form-label">
							<b>Catégorie</b>
						</label>
						<div className="m-2">
							<select
								className="form-control me-4"
								value={activeNote && activeNote.categorie}
								onChange={(e) => OnEditField("categorie", e.target.value)}
							>
								{/* {categoriesBDD.map((categorieBDD) => {
									return categorieBDD;
								})} */}
								<option>Toutes les catégories</option>

								<option>Achats</option>

								<option>Shopping</option>

								<option>Rendez-vous</option>

								<option>Frais</option>

								<option>Charges</option>
							</select>
						</div>
					</div>
					<div>
						<textarea
							id="body"
							className="form-control"
							value={activeNote && activeNote.body}
							onChange={(e) => OnEditField("body", e.target.value)}
							placeholder="Ecrivez votre note ici..."
						/>
					</div>
				</div>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote && activeNote.title}</h1>
				<div>
					<h2 className="preview-title">
						{activeNote && activeNote.categorie}
					</h2>
				</div>
				<ReactMarkdown className="markdown-preview">
					{activeNote && activeNote.body}
				</ReactMarkdown>
			</div>
		</div>
	);
}
export default Main;
