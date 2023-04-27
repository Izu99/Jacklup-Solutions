import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../Styles/PersonalDetails.css";

export default class PersonalTableThrow extends Component {
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
			<div className='pro-details'>
				<table className='table table-striped'>
					<tr>
						<td style={{ fontWeight: "bold" }}> name</td>
						<td>{this.props.obj.name}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>age</td>
						<td>{this.props.obj.age}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>mobile</td>
						<td>{this.props.obj.mobile}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>tel</td>
						<td>{this.props.obj.tel}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>email</td>
						<td>{this.props.obj.email}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Nic</td>
						<td>{this.props.obj.adress}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>password</td>
						<td>{this.props.obj.password}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>cpassword</td>
						<td>{this.props.obj.cpassword}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>country</td>
						<td>{this.props.obj.country}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>password</td>
						<td>{this.props.obj.password}</td>
					</tr>
					<tr className='profile-actions'>
						<td>
							<button className='btn'>
								{/* <Link to={'/Editregister/' + this.props.obj._id}>Edit</Link> */}
							</button>
						</td>
						<td>
							<button className='btn' onClick={this.delete}>
								Delete Account
							</button>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
