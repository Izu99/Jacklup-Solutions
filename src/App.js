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
<<<<<<< HEAD
import AvailableVacancies from "./Components/AvailableVacancies";
import PersonalDetails from "./Components/PersonalDetails"
import EditEmployee from "./Components/EditEmployee"
=======
import AvailableVacancies from "./Components/AvailableVacancies"
import PersonalDetails from "./Components/PersonalDetails";
import PersonalDetailsAdmin from './Components/PersonalDetailsAdmin'
>>>>>>> 34c7f906f715b36be6d1a1e956ea35f65bfadc9a
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
<<<<<<< HEAD
						<Route path='/EditEmployee/:id' component={EditEmployee} />
=======
						<Route path='/adminprofile' component={PersonalDetailsAdmin} />
>>>>>>> 34c7f906f715b36be6d1a1e956ea35f65bfadc9a

						{/* <Redirect path to='/404' Component={PageNotFound}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
