import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import "./Categorie.css";

export default function AjoutCategorie() {
	const [categories, setCategories] = useState(() => {
		const savedCategories = localStorage.getItem("categories");
		if (savedCategories) {
			return JSON.parse(savedCategories);
		} else {
			return [];
		}
	});
	const [categorie, setCategorie] = useState("");
	const [ModeModifCategorie, setModeModifCategorie] = useState(false);
	const [ActuCategorie, setActuCategorie] = useState({});

	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories));
	}, [categories]);

	function changementInput(e) {
		setCategorie(e.target.value);
	}

	function modifierInput(e) {
		setActuCategorie({
			...ActuCategorie,
			titreCat: e.target.value,
		});
		console.log(ActuCategorie);
	}

	function formulaireAjouter(e) {
		e.preventDefault();

		if (categorie !== "") {
			setCategories([
				...categories,
				{
					id: categories.length + 1,
					titreCat: categorie.trim(),
				},
			]);
		}

		setCategorie("");
	}

	function formulaireModifier(e) {
		e.preventDefault();

		updateCategorie(ActuCategorie.id, ActuCategorie);
	}

	function supprimer(id) {
		const suppItem = categories.filter((catogorie) => {
			return catogorie.id !== id;
		});
		setCategories(suppItem);
	}

	function updateCategorie(id, updatedCategorie1) {
		const updatedItem1 = categories.map((categorie) => {
			return categorie.id === id ? updatedCategorie1 : categorie;
		});
		setModeModifCategorie(false);
		setCategories(updatedItem1);
	}

	function modifier(categorie) {
		setModeModifCategorie(true);
		setActuCategorie({ ...categorie });
	}

	let afficheCategorie = categories.map((categorie) => {
		return (
			<div key={categorie.id}>
				<main>
					<section className="container">
						<section className="row">
							<section className="col-md-8">
								<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
									<b>{categorie && categorie.titreCat}</b>

									<span>
										<button
											className="btn btn-warning "
											onClick={() => modifier(categorie)}
										>
											Modifier
										</button>
										<button
											className="btn btn-danger ms-3"
											onClick={() => supprimer(categorie.id)}
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
	});

	return (
		<div>
			<NavBar />
			<div class="categorie_scrollbar categorie_scrollbar-primary">
				<div class="categorie_force-overflow">
					{ModeModifCategorie ? (
						<form onSubmit={formulaireModifier}>
							<main>
								<section className="container">
									<section className="row">
										<section className="col-md-8">
											<h1 className="mt-Carnet">Modifier une categorie</h1>

											<div className="input-group mb-3 mt-3">
												<input
													name="modifier"
													className="form-control"
													type="text"
													placeholder="Modifier"
													value={ActuCategorie.titreCat}
													onChange={modifierInput}
												/>
											</div>

											<div>
												<button
													className="btn btn-secondary "
													onClick={() => setModeModifCategorie(false)}
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
						<form onSubmit={formulaireAjouter}>
							<main>
								<section className="container">
									<section className="row">
										<section className="col-md-8">
											<h1 className="mt-Carnet">Ajout une categorie</h1>

											<div className="input-group mb-3 mt-3">
												<input
													className="form-control"
													name="categorie"
													type="text"
													placeholder="Ajouter une categorie"
													value={categorie}
													onChange={changementInput}
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
												{categories.length > 0 && (
													<div className="mb-4 mt-3">
														<b>Nombre de categories totales </b>
														<span className="nb-pro badge rounded-pill bg-info text-dark">
															<b>{categories.length}</b>
														</span>
													</div>
												)}
												{afficheCategorie}
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
