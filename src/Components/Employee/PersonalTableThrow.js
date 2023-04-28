import React, { Component } from "react";
import axios from "axios";
// import PersonalTableThrow from "./PersonalTableThrow";
import { Link } from "react-router-dom";
import "../../Styles/PersonalDetails.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile-image.svg";
import ellipse1 from "../../images/ellipse1.svg";
import polygon from "../../images/Polygon.svg";
import ellipse2 from "../../images/ellipse2.svg";
import ellipse3 from "../../images/ellipse3.svg";

export default class PersonalDetails extends Component {
	constructor(props) {
		super(props);

		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.delete("http://localhost:4000/emplooyee/delete/" + this.props.obj._id)
			.then(this.setState({ redirect: true }))
			.catch((err) => console.log(err));
		alert("Your Account Successfully Deleted....");
		window.location.replace("/login");
	}

	render() {
		return (
			<div className='PersonalDetails'>
				{/* <div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div> */}
				<table className='table table-striped'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Name</td>
						<td>{this.props.obj.name}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Email</td>
						<td>{this.props.obj.email}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Mobile</td>
						<td>{this.props.obj.mobile}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Address</td>
						<td>{this.props.obj.adress}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Age</td>
						<td>{this.props.obj.age}</td>
					</tr>
					{/* <tr>
						<td style={{ fontWeight: "bold" }}>Emp No</td>
						{/* <td>{this.props.obj.phoneNu}</td> *
					</tr> */}

					<tr className='profile-actions'>
						<td>
							<button className='btn'>
								{/* <Link to={'/EditEmployee/' + this.props.obj._id}>Edit</Link> } */}
							</button>
						</td>
						<td>
							<button className='btn' onClick={this.delete}>
								Delete Account
							</button>
						</td>
					</tr>
				</table>
				<button type='submit'>Monthly Work Report</button>
			</div>
		);
	}
}
