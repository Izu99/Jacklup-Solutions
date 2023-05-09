import React, { Component } from "react";
import axios from "axios";
 import "../../Styles/OrderAll.css";
 import TableRow from "./clientOderRow";
 import jsPDF from "jspdf";
 import "jspdf-autotable";

export default class clientOder extends Component {

	constructor(props) {
		super(props);
		this.state = { coder: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/myOder/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ coder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	 tabRow() {
	 	return this.state.coder.map(function (object, i) {
	 		return <TableRow obj={object} key={i} />;
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

		const data = this.state.coder.map((elt) => [
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
		const pending = "pending";
		const complete = "complete";
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Order</h2>
					
					<div className='top-nav'>
						<ul>
							<li>
							<a href={"/clientoderView" }>All </a>
							</li>
							 <li>
							 <a href={"/pendingpayment/" + pending}>Pending</a>

							</li> 
							 <li>
									<a href={"/completepaymnet/"+complete }>complete</a>
							</li> 
							
						</ul>
					</div>
					<table>
						<thead>
							<th>Invoice</th>
                            <th>Status</th>
							<th>Order Date</th>
						
						</thead>
					
						 <tbody>{this.tabRow()}</tbody> 
					</table>
					<div className='sidebar'>
						<button>Order history</button>
						<br />
						<button onClick={() => this.exportPDF()} >report</button>
					</div>
				</div>
			</div>
		);
	}
}
