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
import AvailableVacancies from "./Components/Employee/AvailableVacancies";
import PersonalDetails from "./Components/Employee/PersonalDetails";
import EditEmployee from "./Components/Employee/EditEmployee";
import PersonalDetailsAdmin from "./Components/Employee/PersonalDetailsAdmin";
import PaymentHistory from "./Components/Payment/PaymentHistory";
import Login from "./Components/Login";
import OrderAll from "./Components/Order/OrderAll";
import UpdateOrderInformation from "./Components/Order/UpdateOrderInformation";
import OrderInformation from "./Components/Order/OrderInformation";
import PaymentInformation from "./Components/Payment/PaymentInformation";
import CardAdd from "./Components/CardAdd";

import myOdersView from "./Components/Order/myOdersView";
import submitOder from "./Components/Order/submitOder";
import myOders from "./Components/Order/myOders";
class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path='/employeeadd' component={EmployeeAdd} />
						<Route path='/employeeview' component={EmployeeView} />
						<Route path='/availablevacancies' component={AvailableVacancies} />
						<Route path='/employeeadd' component={EmployeeAdd} />
						<Route path='/EditEmployee/:id' component={EditEmployee} />
						<Route path='/personaldetails/:id' component={PersonalDetails} />
						<Route path='/adminprofile' component={PersonalDetailsAdmin} />
						<Route path='/paymenthistory' component={PaymentHistory} />
						<Route path='/login' component={Login} />
						{/* <Route path='/' component={Login} /> */}
						<Route path='/orderall' component={OrderAll} />

						<Route path='/updateorderinformation/:id' component={UpdateOrderInformation} />
						<Route path='/orderinformation/:id' component={OrderInformation} />
						<Route path='/paymentinformation' component={PaymentInformation} />
						<Route path='/orderall' component={OrderAll} />
						<Route path='/updateorderinformation/:id' component={UpdateOrderInformation} />
						<Route path='/orderinformation' component={OrderInformation} />
						<Route path='/cardadd' component={CardAdd} />

						<Route path='/myOdersView' component={myOdersView} />
						<Route path='/submitOder/:id' component={submitOder} />
						<Route path='/myOders' component={myOders} />
						{/* <Redirect path to='/404' Component={PageNotFound}/> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
