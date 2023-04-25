import React, { Component } from "react";

import "../Styles/PersonalDetails.css";

export default class PersonalDetails extends Component {
	render() {
		return (
			<div className="PersonalDetails">
				<table>
					<tr>
						<td>Name</td>
                        <label htmlFor="">name</label>
					</tr>
					<tr>
						<td>Mobile</td>
                        <label htmlFor="">mobile</label>
					</tr>
					<tr>
						<td>Address</td>
                        <label htmlFor="">address</label>
					</tr>
					<tr>
						<td>Age</td>
                        <label htmlFor="">age</label>
					</tr>
				</table>
				<table>
					<tr>
						<td>Emp No</td>
                        <label htmlFor="">emo no</label>
					</tr>
					<tr>
						<td>Joined Date</td>
                        <label htmlFor="">joined date</label>
					</tr>
				</table>
			</div>
		);
	}
}
