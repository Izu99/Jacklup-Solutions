import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
// import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import EmployeeAdd from "./Components/EmployeeAdd";
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						{/* <Route path='/Login' component={Login} /> */}
						<Route path='/employeeadd' component={EmployeeAdd} />

						{/* <Redirect path to='/404' Component={PageNotFound}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
