import React, { Component } from "react";
import ellipse1 from "../../images/ellipse1.svg";
import polygon from "../../images/Polygon.svg";
import ellipse2 from "../../images/ellipse2.svg";
import ellipse3 from "../../images/ellipse3.svg";
import logo from "../../images/logo.svg";
import profile from "../../images/profile-image.svg";

import "../../Styles/PersonalDetailsAdmin.css";

export default class PersonalDetailsAdmin extends Component {
	render() {
		return (
			<div className='adminProfile'>
				<div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div>
				<img src={ellipse1} alt='' className='ellipse1' />
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
				<img src={polygon} alt='' className='polygon1' />

				<div className='title2'>
					<h2>Employment Details</h2>
				</div>
				<img src={ellipse2} alt='' className='ellipse2' />
				<img src={ellipse3} alt='' className='ellipse3' />
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
				<button type='submit' className='report'>
					Monthly Work Report
				</button>
				<button type='submit' className='btn'>
					Edit Profile
				</button>
				<button type='submit' className='btn'>
					Delete Profile
				</button>
			</div>
		);
	}
}
