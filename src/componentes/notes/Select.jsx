export default function Select(props, OnEditField, activeNote) {
	console.log("propsChildren:", props.children);
	{
		return (
			<select
				className="form-control me-4"
				value={activeNote && activeNote.categorie}
				onChange={(e) => OnEditField("categorie", e.target.value)}
			>
				{props.children.map((element) => element)}
			</select>
		);
	}
}
