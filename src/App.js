//Styling
import React from "react";
import "./styles/app.scss";

//Components
import Nav from "./components/Nav";
import TopPage from "./components/TopPage";
import BottomPage from "./components/BottomPage";
import { ProductState } from "./components/ProductState";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<div className='main-page'>
				<Nav />
				<TopPage products={ProductState} />
				<BottomPage />
			</div>
		</div>
	);
}

export default App;
