import React, { Component } from "react";
import axios from "axios";
// import PersonalTableThrow from "./PersonalTableThrow";
import { Link } from "react-router-dom";
import "../Styles/PersonalDetails.css";

export default class PersonalDetails extends Component {
	render() {
		return (
			<div className='PersonalDetails'>
				<div className='profile-top'>
					<div className='left-details'>
						<h2>Profile Details</h2>
						<div className='profile-image-container'>
							<img
								src='https://thereadtoday.com/wp-content/uploads/2020/12/solo-male-travel-800x445.jpg'
								alt='Profile'
								className='profile-image'
							/>
						</div>
					</div>
				</div>
				<table className='table table-striped'>
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
					</tr>
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
