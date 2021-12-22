export default function ListCat({ categorie }) {
	return (
		<div className="mt-3">
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-8">
							<li class="list-group-item d-flex justify-content-between align-items-center">
								<div class="ms-2 me-auto">
									<div class="fw-bold">
										<b>{categorie}</b>
									</div>
								</div>
								{/* <span class="badge bg-primary rounded-pill">
                                {categories.length}
                            </span> */}
							</li>
						</section>
					</section>
				</section>
			</main>
		</div>
	);
}
