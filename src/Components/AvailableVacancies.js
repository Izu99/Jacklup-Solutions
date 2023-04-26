import React, { Component } from "react";

import "../Styles/AvailableVacancies.css";

export default class AvailableVacancies extends Component {
	render() {
		return (
			<div className='availablevacancies'>
				<h2 className='main-header'>Become A Chapter In The Progression Of Innovation</h2>

				<table class='table table-striped'>
					<h2>Available Vacancies</h2>
					<tr className='users'>
						<td className='user'>
							<div className='details'>
								<p>Web Developer</p>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
                    <tr className='users'>
						<td className='user'>
							<div className='details'>
								<p>Event Organizer</p>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
					<tr className='users'>
						<td className='user'>
							<div className='details'>
								<p>Graphic Designer</p>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
					<tr className='users'>
						<td className='user'>
							<div className='details'>
								<p>Financial Manager</p>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
