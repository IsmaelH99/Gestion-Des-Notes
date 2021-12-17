import "./NavBar.css";
import { Route, Router, Routes, Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand mb-0 h1" href="#">
					<img
						src="https://www.pngkey.com/png/detail/793-7936169_how-to-take-notes-open-book-book-and.png"
						className="logoNotes"
						alt=""
					/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							{/* <a class="nav-link active" aria-current="page" href="#">
								Carnets
							</a> */}
							<Link to="/Carnets">Carnets</Link>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Catégorie
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Configuration
							</a>
						</li>
					</ul>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Recherche"
							aria-label="Search"
						/>
						<button class="btn btn-outline-primary bg-light" type="submit">
							Recherche
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
