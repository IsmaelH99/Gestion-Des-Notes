export default function ListCat({ categorie, supprimer }) {
	return (
		<div>
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-8">
							<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
								<b>{categorie}</b>

								<span>
									<button
										className="btn btn-danger mt-2"
										onClick={() => supprimer(categorie)}
									>
										Supprimer
									</button>
								</span>
							</li>
						</section>
					</section>
				</section>
			</main>
		</div>
	);
}
