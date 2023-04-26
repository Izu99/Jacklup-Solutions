import React, { Component } from "react";
import axios from "axios";
// import PersonalTableThrow from "./PersonalTableThrow";
import { Link } from "react-router-dom";
import "../Styles/PersonalDetails.css";
import logo from "../images/logo.svg";
import profile from "../images/profile-image.svg";
import ellipse from "../images/ellipse1.svg";

export default class PersonalDetails extends Component {
	render() {
		return (
			<div className='PersonalDetails'>
				<div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div>
				<img src={ellipse} alt='' className="ellipse"/>
				<div className='profile'>
					<img src={profile} alt='' />
					<h2>Jenny Cruse</h2>
					<p>Event Planner</p>
				</div>
				<div className='title1'>
					<h2>Personal Details</h2>
				</div>

				<table className='table1 table-striped'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Email</td>
						{/* <td>{this.props.obj.firstName}</td> */}
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Mobile</td>
						{/* <td>{this.props.obj.lastName}</td> */}
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Address</td>
						{/* <td>{this.props.obj.email}</td> */}
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Age</td>
						{/* <td>{this.props.obj.countryCode}</td> */}
					</tr>{" "}
				</table>

				<div className='title2'>
					<h2>Employee Details</h2>
				</div>
				<table className='table2'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Emp No</td>
						{/* <td>{this.props.obj.phoneNu}</td> */}
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Joined Date</td>
						{/* <td>{this.props.obj.nic}</td> */}
					</tr>
					{/* <tr className='profile-actions'>
						<td>
							<button className='btn'> */}
					{/* <Link to={'/Editregister/' + this.props.obj._id}>Edit</Link> */}
					{/* </button> */}
					{/* </td> */}
					{/* <td>
							<button className='btn' onClick={this.delete}>
								Delete Account
							</button>
						</td> */}
					{/* </tr> */}
				</table>
			</div>
		);
	}
}
