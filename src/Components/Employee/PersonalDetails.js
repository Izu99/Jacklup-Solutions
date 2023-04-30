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
 import TableRow from "../Order/myOderRow";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class PersonalDetails extends Component {
	constructor(props) {
		super(props);

		this.state = { employee: [] ,myoder:[],search:"" };
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

	 tabRow1() {
	 	return this.state.myoder.map(function (object, i) {
	 		return <TableRow obj={object} key={i} />;
	 	});	
	 }

	 componentDidMounta() {
	 	// alert('email is ' +this.props.match.params.id);
	 	axios
	 		.get("http://localhost:4000/myOder/getall/")
	 		.then((response) => {
	 			// alert('Pass una')
	 			// alert('Data Tika :'+response.data)
	 			this.setState({ myoder: response.data });
	 		})
	 		.catch(function (error) {
	 			console.log(error);
	 		});
	 }

	



	exportPDF = () => {
		const unit = "pt";
		const size = "A4"; // Use A1, A2, A3 or A4
		const orientation = "portrait"; // portrait or landscape

		const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);

		doc.setFontSize(15);

		const title = "My Report";
		const headers = [
			[
				"oderNo",
				"status",
				"date",
				
			],
		];

		const data = this.state.myoder.map((elt) => [
			elt.oderNo,
			elt.status,
			elt.date,
			
		]);

		let content = {
			startY: 50,
			head: headers,
			body: data,
		};

		doc.text(title, marginLeft, 40);
		doc.autoTable(content);
		doc.save("report.pdf");
	};

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
					<h2>{this.state.employee.name}</h2>
					<p>{this.state.employee.posision}</p>
				</div>
				<div className='title1'>
					<h2>Personal Details</h2>
				</div>

				{this.tabRow()}
				{this.tabRow1()}
				<img src={polygon} alt='' className='polygon1' />

				<div className='title2'>
					<h2>Employment Details</h2>
				</div>
				<img src={ellipse2} alt='' className='ellipse2' />
				<img src={ellipse3} alt='' className='ellipse3' />
				<table className='table2'>
					<tr>
						<td style={{ fontWeight: "bold" }}>Emp No</td>
						{/* <td>{this.props.obj.empId}</td> */}
					</tr>
					<tr>
						<td style={{ fontWeight: "bold" }}>Joined Date</td>
						{/* <td>{this.props.obj.nic}</td> */}
					</tr>
				</table>
				<center>
								<button
									onClick={() => this.exportPDF()}
									style={{
										background: "blue",
										padding: 10,
										color: "white",
										border: "none",
										borderRadius: "20",
									}}>
									- Export All -
								</button>
							</center>
				<a href='/orderall'><button type="submit" className="order">Orders</button></a>
			</div>
		);
	}
}
