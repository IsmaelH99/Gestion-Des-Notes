import "./../src/assets/logo-my-notes.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageAccueil from "./componentes/PageAccueil";
import NavBar from "./componentes/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carnets from "./componentes/carnets/Carnets";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<NavBar />
					<PageAccueil />
				</header>
				<Routes>
					<Route path="/Carnets" element={<Carnets />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
