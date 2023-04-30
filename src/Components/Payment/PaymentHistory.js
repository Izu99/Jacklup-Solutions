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
