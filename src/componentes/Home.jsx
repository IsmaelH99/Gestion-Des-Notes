export default function Home({ NbrCarnet }) {
	return (
		<div>
			<div className="mb-4 mt-3">
				<b>Nombre de carnets totals </b>
				<span className="nb-pro badge rounded-pill bg-info text-dark">
					<b>{NbrCarnet}</b>
				</span>
			</div>
		</div>
	);
}
