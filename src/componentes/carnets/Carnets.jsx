import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";

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
		if (indice > -1) tmp.splice(indice, 1);
		setCarnets(tmp);
	}

	let afficheCarnet = carnets.map((carnet, i) => {
		return (
			<div key={"carnets-" + i} className="mt-3 ms-3 ">
				<div class="col-md-4">
					<div class="card h-100">
						<div class="card-header text-center">
							<b>{carnet}</b>
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
							<h1 className="mt-5">Ajouter un carnet</h1>
							<div class="input-group mb-3 mt-3">
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
										class="btn btn-primary ms-3"
									>
										Ajouter
									</button>
								</div>
							</div>
						</section>
					</section>
				</section>
			</main>
			{/* <div className="mt-5 m-5 ">
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
			</div> */}
			{afficheCarnet}
		</div>
	);
}
