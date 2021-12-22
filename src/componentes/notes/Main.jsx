import ReactMarkdown from "react-markdown";
export default function Main({ noteActive, ModifierNotes }) {
	const ModifNotes = (key, value) => {
		ModifierNotes({
			...noteActive,
			[key]: value,
			derniereModification: Date.now(),
		});
	};

	if (!noteActive)
		return (
			<h1 className="text-center aucune-note">Aucune note selectionnée</h1>
		);

	return (
		<div>
			<div>
				<div class="input-group mb-3 mt-5 ">
					<div>
						<input
							id="title"
							type="text"
							value={noteActive && noteActive.title}
							class="form-control"
							onChange={(e) => ModifNotes("title", e.target.value)}
							autoFocus
						/>
					</div>
				</div>

				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="Ecrivez votre note ici..."
						id="body"
						value={noteActive && noteActive.body}
						onChange={(e) => ModifNotes("body", e.target.value)}
					></textarea>
				</div>
			</div>
			<hr className="mt-5" />
			<div>
				<h1>{noteActive && noteActive.title}</h1>
				<ReactMarkdown>{noteActive && noteActive.body}</ReactMarkdown>
			</div>
		</div>
	);
}
