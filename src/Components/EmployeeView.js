import React, { Component } from "react";

import "../Styles/EmployeeView.css";

export default class EmployeeView extends Component {
	render() {
		return (
			<div className='EmployeeView'>
				<h2 className='main-header'>Employee</h2>

				<table class='table table-striped'>
					{" "}
					<thead>
						<th></th>
						<th>Name</th>
						<th>Emp Id</th>
						<th>E-mail</th>
						<th>Position</th>
						<th>Status</th>
						<th>Action</th>
					</thead>
					<tr className='users'>
						<td className='user'>
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
						</td>
						<td>Name</td>
						<td>20</td>
						<td>
							<a href=''>email123@gmail.com</a>{" "}
						</td>
						<td>Event Planner</td>
						<td>Active</td>
						<td className="actions">
							<i class='fa-solid fa-pen'></i>
							<i class='fa-solid fa-exclamation'></i>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
