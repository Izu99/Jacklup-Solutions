import React, { Component } from "react";
import logo from '../images/logo.svg'
import profileimage from '../images/profile-image2.svg'
import profile from "../images/profile-image.svg";
import ellipse1 from "../images/ellipse1.svg";
import polygon from "../images/Polygon.svg";
import ellipse2 from "../images/ellipse2.svg";
import ellipse3 from "../images/ellipse3.svg";
import "../Styles/AvailableVacancies.css";

export default class AvailableVacancies extends Component {
	render() {
		return (
			<div className='availablevacancies'>
				<img src={ellipse1} alt='' className='ellipse1' />
				<nav>
					<img src={logo} alt="" />
					<ul>
						<li>Home</li>
						<li>Offers</li>
						<li>About Us</li>
						<li>Contact Us</li>
					</ul>
					<div className="profile">
						<img src={profileimage} alt="" />
					</div>
				</nav>
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
				<img src={ellipse2} alt='' className='ellipse2' />
				<img src={ellipse3} alt='' className='ellipse3' />
			</div>
		);
	}
}
