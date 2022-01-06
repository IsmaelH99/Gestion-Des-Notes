import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import "./Carnets.css";
import Carn from "./SwitchMode";

export default function Carnets() {
	const [active, setActive] = useState("CardsCarn");
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		let datas = localStorage.getItem("notes");
		setNotes(JSON.parse(datas));
	}, []);

	const [carnets, setCarnets] = useState(() => {
		const savedCarnets = localStorage.getItem("carnets");
		if (savedCarnets) {
			return JSON.parse(savedCarnets);
		} else {
			return [];
		}
	});
	const [carnet, setCarnet] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [currentCarnet, setCurrentCarnet] = useState({});

	useEffect(() => {
		localStorage.setItem("carnets", JSON.stringify(carnets));
	}, [carnets]);

	const [rech, setRech] = useState("");

	function rechercher(strRech, liste) {
		let tmpRech = strRech.toLowerCase();
		let res = liste.filter((car) => {
			let lowerCarnetTitre = car.text.toLowerCase();

			if (lowerCarnetTitre.indexOf(tmpRech) > -1) return car;
		});
		return res;
	}

	function handleInputChange(e) {
		setCarnet(e.target.value);
	}

	function handleEditInputChange(e) {
		setCurrentCarnet({ ...currentCarnet, text: e.target.value });
		console.log(currentCarnet);
	}

	function handleFormSubmit(e) {
		e.preventDefault();

		if (carnet !== "") {
			setCarnets([
				...carnets,
				{
					id: carnets.length + 1,
					text: carnet.trim(),
				},
			]);
		}

		setCarnet("");
	}

	function handleEditFormSubmit(e) {
		e.preventDefault();

		handleUpdateCarnet(currentCarnet.id, currentCarnet);
	}

	function handleDeleteClick(id) {
		const removeItem = carnets.filter((carnet) => {
			return carnet.id !== id;
		});
		setCarnets(removeItem);
	}

	function handleUpdateCarnet(id, updatedCarnet) {
		const updatedItem = carnets.map((carnet) => {
			return carnet.id === id ? updatedCarnet : carnet;
		});
		setIsEditing(false);
		setCarnets(updatedItem);
	}

	function handleEditClick(carnet) {
		setIsEditing(true);
		setCurrentCarnet({ ...carnet });
	}

	let afficheCarnetCards = rechercher(rech, carnets).map((carnet) => {
		return (
			<div key={carnet.id} className="mt-3 ms-3 ">
				<div class="col-md-12 ">
					<div class="card h-100 ">
						<div class="card-header text-center">
							<Link to={`/carnet/${carnet.id}`}>
								<b>{carnet.text}</b>
							</Link>
						</div>
						<div class="card-body text-white bg-secondary">
							<h5 class="card-title"> Titre : {notes && notes.title}</h5>
							<p class="card-text">Nombre de notes : {notes.length}</p>
						</div>
					</div>
				</div>

				<button
					className="btn btn-warning mt-2"
					onClick={() => handleEditClick(carnet)}
				>
					Modifier
				</button>

				<button
					className="btn btn-danger mt-2 ms-3"
					onClick={() => handleDeleteClick(carnet.id)}
				>
					Supprimer
				</button>
			</div>
		);
	});
	let afficheCarnetListe = rechercher(rech, carnets).map((carnet) => {
		return (
			<main key={carnet.id}>
				<section className="container">
					<section className="row">
						<section className="col-md-10">
							<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
								<Link to={`/carnet/${carnet.text}`}>
									<b>{carnet.text}</b>
								</Link>
								<span>
									<button
										className="btn btn-warning mt-2"
										onClick={() => handleEditClick(carnet)}
									>
										Modifier
									</button>
									<button
										className="btn btn-danger mt-2 ms-3"
										onClick={() => handleDeleteClick(carnet.id)}
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
		<div className="App">
			<NavBar />
			<div class="carnet_scrollbar carnet_scrollbar-primary">
				<div class="carnet_force-overflow">
					{isEditing ? (
						<form onSubmit={handleEditFormSubmit}>
							<main>
								<section className="container">
									<section className="row">
										<section className="col-md-8">
											<h1 className="mt-Carnet">Modifer un carnet</h1>
											<div className="input-group mb-3 mt-3">
												<input
													name="modifier"
													className="form-control"
													type="text"
													placeholder="Modifier"
													value={currentCarnet.text}
													onChange={handleEditInputChange}
												/>
											</div>
											<div>
												<button
													className="btn btn-secondary "
													onClick={() => setIsEditing(false)}
												>
													Annuler
												</button>
												<button className="btn btn-success ms-3" type="submit">
													Enregistrer
												</button>
											</div>
										</section>
									</section>
								</section>
							</main>
						</form>
					) : (
						<form onSubmit={handleFormSubmit}>
							<main>
								<section className="container">
									<section className="row">
										<section className="col-md-8">
											<h1 className="mt-Carnet">Ajout d'un carnet</h1>
											<div className="input-group mb-3 mt-3">
												<input
													className="form-control"
													name="carnet"
													type="text"
													placeholder="Ajouter un carnet"
													value={carnet}
													onChange={handleInputChange}
												/>
												<div>
													<button
														type="submit"
														className="btn btn-primary ms-3"
													>
														Ajouter
													</button>
												</div>
											</div>
											<div className="mt-3">
												{carnets.length > 0 && (
													<div className="col-md-5 mb-3">
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
													{active === "CardsCarn" && (
														<Carn title={afficheCards} />
													)}
													{active === "ListesCarn" && (
														<Carn title={afficheCarnetListe} />
													)}
												</div>
											</div>
										</section>
									</section>
								</section>
							</main>
						</form>
					)}
				</div>
			</div>
		</div>
	);
}
