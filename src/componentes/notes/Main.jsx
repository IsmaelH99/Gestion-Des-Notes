import ReactMarkdown from "react-markdown";
function Main({ activeNote, OnUpdateNote }) {
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
				<input
					type="text"
					id="title"
					value={activeNote && activeNote.title}
					onChange={(e) => OnEditField("title", e.target.value)}
					autoFocus
				/>
				<textarea
					id="body"
					value={activeNote && activeNote.body}
					onChange={(e) => OnEditField("body", e.target.value)}
					placeholder="Ecrivez votre note ici..."
				/>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote && activeNote.title}</h1>
				<ReactMarkdown className="markdown-preview">
					{activeNote && activeNote.body}
				</ReactMarkdown>
			</div>
		</div>
	);
}
export default Main;
