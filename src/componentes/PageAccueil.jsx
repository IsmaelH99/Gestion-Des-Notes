export default function PageAccueil() {
	return (
		<div className="mt-5 m-5 ">
			<div class="row row-cols-1 row-cols-md-3 g-4 ">
				<div class="col">
					<div class="card h-100">
						<div class="card-header text-center">
							<b> Carnet 1 </b>
						</div>
						<div class="card-body text-white  bg-primary ">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<div class="card-header text-center">
							<b> Carnet 2 </b>
						</div>
						<div class="card-body text-white bg-secondary">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a short card.</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<div class="card-header text-center">
							<b> Carnet 3 </b>
						</div>
						<div class="card-body text-white bg-success">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural
								lead-in to additional content.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<div class="card-header text-center">
							<b> Carnet 4 </b>
						</div>
						<div class="card-body text-white bg-danger">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
