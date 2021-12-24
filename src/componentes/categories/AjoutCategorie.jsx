import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";
import ListCat from "./ListCat";
// import Carnets from "../carnets/Carnets";

export default function AjoutCategorie() {
	const [categories, setCategories] = useState([]);
	const [inputCategorie, setInputcategorie] = useState("");
	const navigator = useNavigate();

	useEffect(() => {
		let categoriesBDD = localStorage.getItem("categories");
		if (categoriesBDD === null) {
			localStorage.setItem("categories", JSON.stringify([]));
			categoriesBDD = [];
		}
		setCategories(JSON.parse(categoriesBDD));
	}, []);

	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories));
	}, [categories]);

	function AddCategorie() {
		let tmp = [...categories];
		if (inputCategorie.trim().length > 0) {
			tmp.push(inputCategorie);
			setCategories(tmp);
		}
		setInputcategorie("");
		//navigator("/Carnets");
	}
	let afficheCategorie = categories.map((categorie, i) => {
		return (
			<ListCat key={"categories-" + i} categorie={categorie} ajnot={ajnot} />
		);
	});

	function ajnot(categorie) {
		const id = categorie;
		const indice = categories.findIndex((categorie) => categorie === id);
		let tmp = [...categories];

		// const id = categorie.id;
		// const i = users.findIndex((user) => user.id === id);
		// const indice = categories.indexOf(categorie);
		console.log(indice);
		//alert("toto");
	}

	return (
		<div>
			<NavBar />
			<main>
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
			{afficheCategorie}
		</div>
	);
}
