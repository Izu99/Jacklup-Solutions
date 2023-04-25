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
import EmployeeView from "./Components/EmployeeView";
import AvailableVacancies from "./Components/AvailableVacancies";
import PersonalDetails from "./Components/PersonalDetails";
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						{/* <Route path='/Login' component={Login} /> */}
						<Route path='/employeeadd' component={EmployeeAdd} />
						<Route path='/employeeview' component={EmployeeView} />
						<Route path='/availablevacancies' component={AvailableVacancies} />
						<Route path='/personaldetails' component={PersonalDetails} />

						{/* <Redirect path to='/404' Component={PageNotFound}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
