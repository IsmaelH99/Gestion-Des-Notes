export default function Carnetsde({ categorie }) {
	return (
		<div className="mt-5 ms-5">
			<div class="col">
				<div class="card h-100">
					<div class="card-header text-center">
						<b>{categorie}</b>
					</div>
					<div class="card-body text-white bg-secondary">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a short card.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
