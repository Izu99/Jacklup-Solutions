import React, { Component } from "react";

import "../Styles/AvailableVacancies.css";

export default class AvailableVacancies extends Component {
	render() {
		return (
			<div className='availablevacancies'>
				<h2 className='main-header'>Vacancies</h2>

				<table class='table table-striped'>
				
					<tr className='users'>
						<td className='user'>
							<div className='details'>
								<h2>Web Developer</h2>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
                    <tr className='users'>
						<td className='user'>
							<div className='details'>
								<h2>Web Developer</h2>
								<button type='submit'>Apply</button>
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
