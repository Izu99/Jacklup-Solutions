import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
// import Login from "./Components/Employee/Login";
import PageNotFound from "./Components/Employee/PageNotFound";
import EmployeeAdd from "./Components/Employee/EmployeeAdd";
import EmployeeView from "./Components/Employee/EmployeeView";
import AvailableVacancies from "./Components/Employee/AvailableVacancies"
import PersonalDetails from "./Components/Employee/PersonalDetails";
import PersonalDetailsAdmin from './Components/Employee/PersonalDetailsAdmin'
import PaymentHistory from "./Components/Payment/PaymentHistory";
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
						<Route path='/employeeadd' component={EmployeeAdd} />
						<Route path='/personaldetails' component={PersonalDetails} />
						<Route path='/adminprofile' component={PersonalDetailsAdmin} />
						<Route path='/paymenthistory' component={PaymentHistory} />

						{/* <Redirect path to='/404' Component={PageNotFound}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
