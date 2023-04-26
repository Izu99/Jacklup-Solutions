import React, { Component } from "react";
import logo from "../images/logo.svg";
import profile from "../images/profile-image.svg";

import "../Styles/EmployeeAdd.css";

export default class EmployeeAdd extends Component {
	render() {
		return (
			<div className='EmployeeAdd'>
				<div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div>
				<div className='profile'>
					<img src={profile} alt='' />
					<h2>Jenny Cruse</h2>
					<p>Event Planner</p>
				</div>
				<div className='title'><h2>Employee Details</h2></div>
				<form action=''>
					
					<div className='detail'>
						<label htmlFor=''>Name</label>
						<input type='text' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Age</label>
						<input type='number' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Mobile</label>
						<input type='number' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Tel</label>
						<input type='number' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Email</label>
						<input type='email' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Address</label>
						<input type='address' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Create Password</label>
						<input type='password' />
					</div>
					<div className='detail'>
						<label htmlFor=''>Confirm Password</label>
						<input type='password' />
					</div>
					<button className='btn'> Save</button>
					<button className='btn'> Cancel</button>
				</form>
			</div>
		);
	}
}
