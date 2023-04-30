import React, { Component } from "react";

import "../../Styles/PaymentHistory.css";

export default class PaymentHistory extends Component {
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
							<th>Status</th>
							<th>Payment</th>
							<th>Amount</th>
						</thead>
				
					
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
