import NavBar from "../navbar/NavBar";
import { useNavigate, useParams } from "react-router-dom";

export default function ModifCarnet() {
	const navigator = useNavigate();
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<NavBar />
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-8 mt-5">
							<div>
								<label>
									<b>Titre du Carnet</b>
								</label>
							</div>
							<div>
								<input className="form-control" type="text" />
							</div>
							<div>
								<button
									className="btn btn-secondary mt-2"
									onClick={() => navigator("/Carnets")}
								>
									Retour
								</button>
								<button
									className="btn btn-success mt-2 ms-3"
									// onClick={() => Enregistrer()}
								>
									Enregistrer
								</button>
							</div>
						</section>
					</section>
				</section>
			</main>
		</div>
	);
}
