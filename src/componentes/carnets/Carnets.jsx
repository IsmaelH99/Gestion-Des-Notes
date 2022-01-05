import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import "./Carnets.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Carn from "./SwitchMode";

export default function Carnets() {
	const [carnets, setCarnets] = useState([]);

	const [inputCarnets, setInputCarnets] = useState("");
	const [active, setActive] = useState("CardsCarn");

	const [rech, setRech] = useState("");

	function rechercher(strRech, liste) {
		let tmpRech = strRech.toLowerCase();
		let res = liste.filter((car) => {
			let lowerCarnetTitre = car.titreCarnet.toLowerCase();

			if (lowerCarnetTitre.indexOf(tmpRech) > -1) return car;
		});
		return res;
	}
	// const [titreCarnet, setTitreCarnet] = useState("");
	// useEffect(() => {
	// 	setTitreCarnet(localStorage.getItem("carnets"));
	// }, []);
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
			tmp.push({
				id: uuidv4(),
				titreCarnet: inputCarnets,
				notesCarnet: [],
			});
			setCarnets(tmp);
			console.log(tmp);
		}
		setInputCarnets("");
	}
	function supprimer(carnet) {
		let tmp = [...carnets];
		const indice = carnets.indexOf(carnet);
		console.log(indice);
		if (indice > -1) tmp.splice(indice, 1);
		setCarnets(tmp);
	}

	function Enregistrer(carnet) {
		let tmpEnr = [...carnets];
		setCarnets(tmpEnr);
	}
	function Modifier() {}
	let afficheCarnetCards = rechercher(rech, carnets).map((carnet, i) => {
		return (
			<div key={"carnetsCards-" + i} className="mt-3 ms-3 ">
				<div class="col-md-12 ">
					<div class="card h-100 ">
						<div class="card-header text-center">
							<Link to={`/carnet/${carnet.id}`}>
								<b>{carnet.titreCarnet}</b>
							</Link>
						</div>
						<div class="card-body text-white bg-secondary">
							<h5 class="card-title">trgfk</h5>
							<p class="card-text">This is a short card.</p>
						</div>
					</div>
				</div>

				<Link to={`/carnet/Modif/${carnet.id}`}>
					<button
						className="btn btn-warning mt-2"
						onClick={() => Modifier(carnet)}
					>
						Modifier
					</button>
				</Link>
				<button
					className="btn btn-danger mt-2 ms-3"
					onClick={() => supprimer(carnet)}
				>
					Supprimer
				</button>
			</div>
		);
	});
	let afficheCarnetListe = carnets.map((carnet, i) => {
		return (
			<main key={"carnetsList-" + i}>
				<section className="container">
					<section className="row">
						<section className="col-md-10">
							<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
								<Link to={`/carnet/${carnet.id}`}>
									<b>{carnet.titreCarnet}</b>
								</Link>
								<span>
									<Link to="/carnet/ModifierCarnet">
										<button
											className="btn btn-warning mt-2"
											onClick={() => Modifier(carnet)}
										>
											Modifier
										</button>
									</Link>
									<button
										className="btn btn-danger mt-2 ms-3"
										onClick={() => supprimer(carnet)}
									>
										Supprimer
									</button>
								</span>
							</li>
						</section>
					</section>
				</section>
			</main>
		);
	});
	const afficheCards = <div className="carton"> {afficheCarnetCards}</div>;

	return (
		<div>
			<NavBar /*titreCarnet={titreCarnet} carnets={carnets} */ />
			<div class="carnet_scrollbar carnet_scrollbar-primary">
				<div class="carnet_force-overflow">
					<main>
						<section className="container">
							<section className="row">
								<section className="col-md-8">
									<h1 className="mt-Carnet">Ajout d'un carnet</h1>
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
									{carnets.length > 0 && (
										<div className="col-md-6">
											<input
												type="search"
												value={rech}
												onChange={(e) => {
													setRech(e.target.value);
												}}
												className="form-control"
												placeholder="Rechercher ..."
											/>
										</div>
									)}

									{carnets.length > 0 && (
										<div className="mb-4 mt-3">
											<b>Nombre de carnets totals </b>
											<span className="nb-pro badge rounded-pill bg-info text-dark">
												<b>{carnets.length}</b>
											</span>
										</div>
									)}
									{carnets.length > 0 && (
										<nav>
											<button
												className="btn btn-info"
												onClick={() => setActive("CardsCarn")}
											>
												Cards
											</button>
											<button
												className="btn btn-primary ms-3"
												onClick={() => setActive("ListesCarn")}
											>
												Listes
											</button>
										</nav>
									)}
									<div>
										{active === "CardsCarn" && <Carn title={afficheCards} />}
										{active === "ListesCarn" && (
											<Carn title={afficheCarnetListe} />
										)}
									</div>
								</section>
							</section>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}
