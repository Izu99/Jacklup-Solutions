import React, { Component } from "react";

import "../Styles/EmployeeAdd.css";

export default class EmployeeAdd extends Component {
	render() {
		return (
			<div className='EmployeeAdd'>
				<form action=''>
                    <div className="detail">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Age</label>
                        <input type="number" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Mobile</label>
                        <input type="number" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Tel</label>
                        <input type="number" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Address</label>
                        <input type="address" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Create Password</label>
                        <input type="password" />
                    </div>
                    <div className="detail">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" />
                    </div>
                    <button className="btn"> Save</button>
                    <button className="btn"> Cancel</button>
                </form>
			</div>
		);
	}
}
