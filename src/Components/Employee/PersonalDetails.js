import React, { Component } from "react";
import axios from "axios";
import ProfileTableRow from "./PersonalTableThrow";
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

		this.state = { employee: [] };
		this.state.Email = this.props.match.params.id;
	}
	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/profile/" + this.props.match.params.id)
			.then((response) => {
				//  alert('Data Tika :'+response.data)
				this.setState({ employee: response.data });
			})
			.catch(function (error) {
				console.log(error);
				alert("Pass una");
			});
	}

	tabRow() {
		return <ProfileTableRow obj={this.state.employee} />;
	}

	render() {
		return (
			<div className='PersonalDetails'>
				{/* {this.tabRow()} */}

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

				{this.tabRow()}
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
				{/* <button type='submit' className='btn'>
					Edit Profile
				</button>
				<button type='submit' className='btn'>
					Delete Profile
				</button> */}
			</div>
		);
	}
}
