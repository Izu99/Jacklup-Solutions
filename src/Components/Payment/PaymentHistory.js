import React, { Component } from "react";
import axios from "axios";
 import "../../Styles/OrderAll.css";
 import TableRow from "./paymnetRow";
 import jsPDF from "jspdf";
import "jspdf-autotable";

export default class Payment extends Component {

	constructor(props) {
		super(props);
		this.state = { payment: [], search: "" };
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
			.get("http://localhost:4000/pay/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ payment: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	 tabRow() {
	 	return this.state.payment.map(function (object, i) {
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
				"payId",
				"pstatus",
				"date",
				"price",
				
			],
		];

		const data = this.state.payment.map((elt) => [
			elt.payId,
			elt.pstatus,
			elt.date,
			elt.price,
			
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
		const half = "half";
		const full = "full";
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Payment History </h2>
					
					<div className='top-nav'>
						<ul>
							<li>
							<a href={"/clientoderView" }>All </a>
							</li>
							 <li>
							 <a href={"/halfpayment/" + half}>half payment</a>

							</li> 
							 <li>
									<a href={"/fullpayment/"+full }>full payment</a>
							</li> 
							
						</ul>
					</div>
					<table>
						<thead>
							<th>Invoice</th>
                            <th>Status</th>
							<th>Order Date</th>
							<th>Balance</th>
						
						</thead>
					
						 <tbody>{this.tabRow()}</tbody> 
					</table>
					<div className='sidebar'>
						<button>Order history</button>
						<br />
						<button onClick={() => this.exportPDF()} >Report</button>
						
					</div>
				</div>
			</div>
		);
	}
}
