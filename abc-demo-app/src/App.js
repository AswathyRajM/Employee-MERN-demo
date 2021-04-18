import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Employee from "./pages/Employee";
import Events from "./pages/Events";
import "./App.css";

function App() {
	return (
		<div className="main-container">
			<Router>
				<Navbar />
				<Switch>
					<Route
						path="/employee"
						component={Employee}
						// className={classN}
						// onClick={() => setclassN("active")}
					/>
					<Route
						path="/events"
						component={Events}
						// className={classN}
						// onClick={() => setclassN("active")}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
