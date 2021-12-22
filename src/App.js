import "./../src/assets/logo-my-notes.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./componentes/Home";
import NavBar from "./componentes/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carnets from "./componentes/carnets/Carnets";
import AjoutCategorie from "./componentes/categories/AjoutCategorie";
import AjouterNotes from "./componentes/Notes/AjouterNotes";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<header className="App-header">
								<NavBar />
								<Home />
							</header>
						}
					></Route>

					<Route path="/Carnets" element={<Carnets />}></Route>
					<Route path="/AjoutCategorie" element={<AjoutCategorie />}></Route>
					<Route path="/AjoutNote" element={<AjouterNotes />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
