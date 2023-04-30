import React, { Component } from "react";
import axios from "axios";
import "../../Styles/PaymentHistory.css";
import TableRow from "./paymnetRow";

export default class PaymentHistory extends Component {


	constructor(props) {
		super(props);
		this.state = { phistory: [], search: "" };
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
				this.setState({ phistory: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	 tabRow() {
	 	return this.state.phistory.map(function (object, i) {
	 		return <TableRow obj={object} key={i} />;
	 	});	
	 }


	render() {
		return (
			<div className='paymentHistory'>
				<div className='history'>
					<h2>Payment</h2>
					<div className='top-nav'>
						<ul>
							<li>
								<a href=''>All Payment</a>{" "}
							</li>
							<li>
								<a href=''> Full Payment</a>
							</li>
							<li>
								<a href=''> Half Payment</a>
							</li>
							<li>
								<a href=''>Refund</a>{" "}
							</li>
						</ul>
					</div>
					<table>
						<thead>
							<th>Transaction ID</th>
							<th>Payment Date</th>
							<th>Amount</th>
						</thead>

						 <tbody>{this.tabRow()}</tbody>
				
					
					</table>
					<div className='sidebar'>
						<button>Payment history</button>
						<br />
						<button>Payment Method </button>
					</div>
				</div>
			</div>
		);
	}
}
