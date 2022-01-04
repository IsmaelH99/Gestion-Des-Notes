export default function ListCat({ categorie, ajnot }) {
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
							</li>
						</section>
					</section>
				</section>
			</main>
		</div>
	);
}
