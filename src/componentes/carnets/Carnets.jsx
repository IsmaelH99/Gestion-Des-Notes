import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { useNavigate, Link } from "react-router-dom";

export default function Carnets() {
	const [carnets, setCarnets] = useState([]);
	const [inputCarnets, setInputCarnets] = useState("");
	const navigator = useNavigate();

	useEffect(() => {
		let carnetsBDD = localStorage.getItem("carnets");
		if (carnetsBDD === null) {
			localStorage.setItem("carnets", JSON.stringify([]));
			carnetsBDD = [];
		}
		setCarnets(JSON.parse(carnetsBDD));
	}, []);

	useEffect(() => {
		localStorage.setItem("carnets", JSON.stringify(carnets));
	}, [carnets]);

	function AddCarnets() {
		let tmp = [...carnets];
		if (inputCarnets.trim().length > 0) {
			tmp.push(inputCarnets);
			setCarnets(tmp);
		}
		setInputCarnets("");
		// navigator("/");
	}
	function supprimer(carnet) {
		let tmp = [...carnets];
		const indice = carnets.indexOf(carnet);
		console.log(indice);
		if (indice > -1) tmp.splice(indice, 1);
		setCarnets(tmp);
	}

	let afficheCarnet = carnets.map((carnet, i) => {
		return (
			<div key={"carnets-" + i} className="mt-3 ms-3 ">
				<div class="col-md-4">
					<div class="card h-100">
						<div class="card-header text-center">
							<Link to="/AjoutCategorie">
								<b>{carnet}</b>
							</Link>
						</div>
						<div class="card-body text-white bg-secondary">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a short card.</p>
						</div>
					</div>
				</div>
				<button
					className="btn btn-danger mt-2"
					onClick={() => supprimer(carnet)}
				>
					Supprimer
				</button>
			</div>
		);
	});

	return (
		<div>
			<NavBar />
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-8">
							<h1 className="mt-5">Ajout d'un carnet</h1>
							<div className="input-group mb-3 mt-3">
								<input
									type="text"
									class="form-control"
									placeholder="Ajouter un carnet "
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									value={inputCarnets}
									onChange={(e) => setInputCarnets(e.target.value)}
								/>
								<div>
									<button
										type="button"
										onClick={AddCarnets}
										className="btn btn-primary ms-3"
									>
										Ajouter
									</button>
								</div>
							</div>
						</section>
					</section>
				</section>
			</main>
			{afficheCarnet}
		</div>
	);
}
