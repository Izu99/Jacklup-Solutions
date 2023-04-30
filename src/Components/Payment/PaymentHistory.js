import React, { Component } from "react";

import "../../Styles/PaymentHistory.css";

export default class PaymentHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: "allpayment",
		};
		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleTabClick(tab) {
		this.setState({
			activeTab: tab,
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
								<th>Status</th>
								<th>Payment</th>
								<th>Amount</th>
							</thead>
							<tr>
								<td>INV-002</td>
								<td>Full Payment</td>
								<td>date</td>
								<td>Rs. 2000.00</td>
								<td>
									<i>
										<i class='fa-solid fa-ellipsis-vertical'></i>
									</i>
								</td>
							</tr>
							<tr>
								<td>INV-002</td>
								<td>Full Payment</td>
								<td>date</td>
								<td>Rs. 2000.00</td>
								<td>
									<i>
										<i class='fa-solid fa-ellipsis-vertical'></i>
									</i>
								</td>
							</tr>
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
