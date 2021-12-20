import { useState } from "react";
import NavBar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";

export default function AjoutCategorie() {
	const [categories, setCategories] = useState([]);
	const [inputCategorie, setInputcategorie] = useState("");
	const navigator = useNavigate();

	function AddCategorie() {
		let tmp = [...categories];
		if (inputCategorie.trim().length > 0) {
			tmp.push(inputCategorie);
			setCategories(tmp);
		}
		setInputcategorie("");
		// navigator("/");
	}

	let afficheCategorie = categories.map((categorie, i) => {
		return (
			<div key={"categories-" + i} className="mt-3">
				<main>
					<section className="container">
						<section className="row">
							<section className="col-md-8">
								<li class="list-group-item d-flex justify-content-between align-items-center">
									<div class="ms-2 me-auto">
										<div class="fw-bold">
											<b>{categorie}</b>
										</div>
										Content for list item
									</div>
									<span class="badge bg-primary rounded-pill">
										{categories.length}
									</span>
								</li>
							</section>
						</section>
					</section>
				</main>
			</div>

			// <div key={"categories-" + i} className="mt-5 ms-5 ">
			// 	<div class="col-md-4">
			// 		<div class="card h-100">
			// 			<div class="card-header text-center">
			// 				<b>{categorie}</b>
			// 			</div>
			// 			<div class="card-body text-white bg-secondary">
			// 				<h5 class="card-title">Card title</h5>
			// 				<p class="card-text">This is a short card.</p>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	});

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
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected>Open this select menu</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
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
