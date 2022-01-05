import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function NavBar() {
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Nav.Link as={NavLink} to="/">
						<img
							src="https://www.pngkey.com/png/detail/793-7936169_how-to-take-notes-open-book-book-and.png"
							className="logoNotes"
							alt=""
						/>
					</Nav.Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item active">
								<Nav.Link as={NavLink} to="/">
									<b>Home</b>
								</Nav.Link>
							</li>
							<li className="nav-item active">
								<Nav.Link as={NavLink} to="/Carnets">
									<b>Carnets</b>
								</Nav.Link>
							</li>
							<li className="nav-item">
								<Nav.Link as={NavLink} to="/AjoutCategorie">
									<b>Catégories</b>
								</Nav.Link>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Recherche"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-primary bg-light"
								type="submit"
							>
								Recherche
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}
