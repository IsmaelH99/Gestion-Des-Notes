import NavBar from "../navbar/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
	const [carnets, setCarnets] = useState([]);
	const [notes, setNotes] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let datas = localStorage.getItem("carnets");
		setCarnets(JSON.parse(datas));
	}, []);

	useEffect(() => {
		let datas = localStorage.getItem("notes");
		setNotes(JSON.parse(datas));
	}, []);

	useEffect(() => {
		let datas = localStorage.getItem("categories");
		setCategories(JSON.parse(datas));
	}, []);

	return (
		<div>
			<NavBar />
			<main>
				<section className="container">
					<section className="row">
						<section className="col-md-12">
							<div class="row row-cols-1 row-cols-md-3 g-4 mt-5 ">
								<div class="col">
									<div class="card h-100  border-primary">
										<img
											src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/27/main/hxz0RhMzDeHogUZK0JNA82JabI3IstKUUbYB3dD8.png"
											class="card-img-top"
											alt="..."
										/>
										<div class="card-body">
											<h5 class="card-title">
												<b>Nombre de carnets totals </b>
												<span className="nb-pro badge rounded-pill bg-info text-dark">
													<b>{carnets.length}</b>
												</span>
											</h5>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card h-100  border-primary">
										<img
											src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp"
											class="card-img-top"
											alt="..."
										/>
										<div class="card-body">
											<h5 class="card-title">
												<b>Nombre de notes totales </b>
												<span className="nb-pro badge rounded-pill bg-info text-dark">
													<b>{notes.length}</b>
												</span>
											</h5>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card h-100  border-primary">
										<img
											src="https://wpformation.com/wp-content/uploads/2017/12/categorie-wordpress-classeur.jpg"
											class="card-img-top"
											alt="..."
										/>
										<div class="card-body">
											<h5 class="card-title">
												<b>Nombre de categories totales </b>
												<span className="nb-pro badge rounded-pill bg-info text-dark">
													<b>{categories.length}</b>
												</span>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</section>
					</section>
				</section>
			</main>
		</div>
	);
}
