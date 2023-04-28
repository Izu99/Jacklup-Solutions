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
				<div className='header'>
					<img src={logo} alt='' />
					<h2>My Profile</h2>
				</div>
				{this.tabRow()}
				
			</div>
		);
	}
}
