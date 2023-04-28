import React, { Component } from "react";

import "../../Styles/OrderAll.css";

export default class OrderAll extends Component {
	render() {
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Order</h2>
					<table>
						<thead>
							<th>Invoice</th>
							<th>Status</th>
							<th>Order Date</th>
							<th>Progress</th>
						</thead>
						<tr>
							<td>INV-002</td>
							<td>Full Payment</td>
							<td>date</td>
							<td><progress id="file" max="100" value="60"> 60% </progress></td>
							<td>
								<i>
									<i class='fa-solid fa-ellipsis-vertical'></i>
								</i>
							</td>
						</tr>
						<tr>
							<td>INV - 001</td>
							<td>Ongoing</td>
							<td>date</td>
							<td><progress id="file" max="100" value="70"> 70% </progress></td>
							<td>
								<i>
									<i class='fa-solid fa-ellipsis-vertical'></i>
								</i>
							</td>
						</tr>
					</table>
					<div className='sidebar'>
						<button>Order history</button>
						<br />
						<button>Order Tracking </button>
					</div>
				</div>
			</div>
		);
	}
}
