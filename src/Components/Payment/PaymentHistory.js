import React, { Component } from "react";
import axios from "axios";
import "../../Styles/PaymentHistory.css";
import TableRow from "./paymnetRow";

export default class PaymentHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: "allpayment",
			phistory: [], search: ""
			
		};
		this.handleTabClick = this.handleTabClick.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	handleTabClick(tab) {
		this.setState({
			activeTab: tab,
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
		const { activeTab } = this.state;
		return (
			<div className='paymentHistory'>
				<div className='history'>
					<h2>Payment</h2>
					<div className='top-nav'>
						<ul>
							<li>
								<a
									href='#'
									onClick={() => this.handleTabClick("allpayment")}
									className={activeTab === "allpayment" ? "active" : ""}>
									All Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									onClick={() => this.handleTabClick("fullpayment")}
									className={activeTab === "fullpayment" ? "active" : ""}>
									Full Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									onClick={() => this.handleTabClick("halfpayment")}
									className={activeTab === "halfpayment" ? "active" : ""}>
									Half Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									onClick={() => this.handleTabClick("refund")}
									className={activeTab === "refund" ? "active" : ""}>
									Refund
								</a>
							</li>
						</ul>
					</div>

					{activeTab === "allpayment" && (
						<table className='allpayment'>
							<thead>
								<th>Transaction ID</th>
								<th>Payment</th>
								<th>Date</th>
								<th>Amount</th>
							</thead>
							<tbody>{this.tabRow()}</tbody> 
							
						</table>
					)}
					{activeTab === "fullpayment" && (
						<table className='fullpayment'>
							<div className='sample'>
								<h2>full Paymnet</h2>
							</div>
						</table>
					)}
					{activeTab === "halfpayment" && (
						<table className='halfpayment'><h2>Half Paymnet</h2></table>
					)}
					{activeTab === "refund" && (
						<table className='refund'><h2>Refund</h2></table>
					)}

					
					

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
