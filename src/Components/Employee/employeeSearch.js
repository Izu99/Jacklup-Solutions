import React, { Component } from "react";
import ellipse1 from "../../images/ellipse1.svg";
import polygon from "../../images/Polygon.svg";
import ellipse2 from "../../images/ellipse2.svg";
import ellipse3 from "../../images/ellipse3.svg";
import logo from "../../images/logo.svg";
import profileimage from "../../images/profile-image2.svg";

import "../../Styles/EmployeeView.css";
import axios from "axios";
import Employesearch from "./EmployeeRow";

export default class Employeesearch extends Component {
	constructor(props) {
		super(props);
		this.state = { employeesearch: [], search: "" };
		// this.state.Station = this.props.match.params.id;

		// this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	// onChangeSearch(e) {
	// 	this.setState({
	// 		search: e.target.value,
	// 	});
	// }

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/emplooyee/search/'+this.props.match.params.pathParam1)
		
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ employeesearch: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.employeesearch.map(function (object, i) {
			return <Employesearch obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	render() {
		return (
			<div className='EmployeeView'>
				<nav>
					<img src={logo} alt='' />
					<ul>
						<li>Home</li>
						<li>Offers</li>
						<li>About Us</li>
						<li>Contact Us</li>
					</ul>
					<div className='profile'>
						<img src={profileimage} alt='' />
					</div>
				</nav>
				<img src={ellipse1} alt='' className='ellipse1' />
				<h2 className='main-header'>Employee</h2>
				
				<p className='add'>
					<a href='/employeeadd'> + </a>
				</p>

				<table class='table table-striped'>
					{" "}
					<thead>
						
						<th>Name</th>
						<th>EmpNU</th>
						<th>E-mail</th>
						<th>Position</th>
						
						<th>Action</th>
					</thead>
					
					<tbody>{this.tabRow()}</tbody>
				</table>
				<img src={polygon} alt='' className='polygon1' />
				<img src={ellipse2} alt='' className='ellipse2' />
				<img src={ellipse3} alt='' className='ellipse3' />
			</div>
		);
	}
}
