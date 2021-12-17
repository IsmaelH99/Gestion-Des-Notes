import { useState } from "react";
import NavBar from "../navbar/NavBar";

export default function Carnets() {
	const [categories, setCategories] = useState([]);
	const [inputCategorie, setInputcategorie] = useState("");

	function AddCategorie() {
		let tmp = [...categories];
		if (inputCategorie.trim().length > 0) {
			tmp.push(inputCategorie);
			setCategories(tmp);
		}
		setInputcategorie("");
	}

	// let categorie = categorie.map((categorie, i) => {
	// 	return (
	// 		<div class="col">
	// 			<div class="card h-100">
	// 				<div class="card-header text-center">
	// 					<b> Carnet 5 </b>
	// 				</div>
	// 				<div class="card-body text-white bg-secondary">
	// 					<h5 class="card-title">Card title</h5>
	// 					<p class="card-text">This is a short card.</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		// <Todo key={"todos-"+i} titre={todo} supprimer={supprimer} />
	// 	);
	// });

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
		</div>
	);
}
