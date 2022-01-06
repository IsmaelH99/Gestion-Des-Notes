import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";

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
	const [isEditing, setIsEditing] = useState(false);
	const [currentCategorie, setCurrentCategorie] = useState({});
	const [inputCategorie, setInputcategorie] = useState("");

	// useEffect(() => {
	// 	let categoriesBDD = localStorage.getItem("categories");
	// 	if (categoriesBDD === null) {
	// 		localStorage.setItem("categories", JSON.stringify([]));
	// 		categoriesBDD = [];
	// 	}
	// 	setCategories(JSON.parse(categoriesBDD));
	// }, []);

	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories));
	}, [categories]);

	const [rech, setRech] = useState("");

	function rechercher(strRech, liste) {
		let tmpRech = strRech.toLowerCase();
		let res = liste.filter((car) => {
			let lowerCategorieTitre = car.titreCat.toLowerCase();

			if (lowerCategorieTitre.indexOf(tmpRech) > -1) return car;
		});
		return res;
	}

	function handleInputChange(e) {
		setCategorie(e.target.value);
	}

	function handleEditInputChange(e) {
		setCurrentCategorie({
			...currentCategorie,
			titreCat: e.target.value,
		});
		console.log(currentCategorie);
	}

	function handleFormSubmit(e) {
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

	function handleEditFormSubmit(e) {
		e.preventDefault();

		handleUpdateCategorie(currentCategorie.id, currentCategorie);
	}

	function handleDeleteClick(id) {
		const removeItem = categories.filter((catogorie) => {
			return catogorie.id !== id;
		});
		setCategories(removeItem);
	}

	function handleUpdateCategorie(id, updatedCategorie) {
		const updatedItem = categories.map((categorie) => {
			return categorie.id === id ? updatedCategorie : categorie;
		});
		setIsEditing(false);
		setCategories(updatedItem);
	}

	function handleEditClick(categorie) {
		setIsEditing(true);
		setCurrentCategorie({ ...categorie });
	}

	// function AddCategorie() {
	// 	let tmp = [...categories];
	// 	if (inputCategorie.trim().length > 0) {
	// 		tmp.push(inputCategorie);
	// 		setCategories(tmp);
	// 	}
	// 	setInputcategorie("");
	// }
	// function supprimer(categorie) {
	// 	let tmp = [...categories];
	// 	const indice = categories.indexOf(categorie);
	// 	console.log(indice);
	// 	if (indice > -1) tmp.splice(indice, 1);
	// 	setCategories(tmp);
	// }
	let afficheCategorie = rechercher(rech, categories).map((categorie, i) => {
		return (
			<div>
				<main>
					<section className="container">
						<section className="row">
							<section className="col-md-8">
								<li className="list-group-item  d-flex justify-content-between align-items-center mt-3">
									<b>{categorie.titreCat}</b>

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
	});

	return (
		<div>
			<NavBar />
			{isEditing ? (
				<form onSubmit={handleEditFormSubmit}>
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
											value={currentCategorie.titreCat}
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
									<h1 className="mt-Carnet">Ajout une categorie</h1>
									<div className="input-group mb-3 mt-3">
										<input
											className="form-control"
											name="categorie"
											type="text"
											placeholder="Ajouter une categorie"
											value={categorie}
											onChange={handleInputChange}
										/>
										<div>
											<button type="submit" className="btn btn-primary ms-3">
												Ajouter
											</button>
										</div>
									</div>
									<div className="mt-3">
										{categories.length > 0 && (
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
	);
}
{
	/* <main>
				<section className="container">
					<section className="row">
						<section className="col-md-8">
							<h1 className="mt-5">Ajout d'une catégorie</h1>
							<div class="input-group mb-3 mt-3">
								<input
									type="text"
									class="form-control"
									placeholder="Ajouter une catégorie"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									value={inputCategorie}
									onChange={(e) => setInputcategorie(e.target.value)}
								/>
								<div>
									<button
										type="button"
										onClick={AddCategorie}
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
			{afficheCategorie} */
}
