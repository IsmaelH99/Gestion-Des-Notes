export default function ListCat({
	categorie,
	categorieTitre,
	handleEditClick,
	handleDeleteClick,
}) {
	return (
		<div>
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-8">
							<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
								<b>{categorieTitre}</b>

								<span>
									<button
										className="btn btn-warning "
										onClick={() => handleEditClick(categorie)}
									>
										Modifier
									</button>
									<button
										className="btn btn-danger ms-3"
										onClick={() => handleDeleteClick(categorie.id)}
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
