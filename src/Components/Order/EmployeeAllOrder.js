import React, { Component } from "react";

import "../../Styles/EmployeeAllOrder.css";

export default class EmployeeAllOrder extends Component {
	render() {
		return (
			<div className='EmployeeAllOrder'>
				<div className='order'>
					<h2>Order</h2>
					<table>
						<thead>
							<th>Description</th>
							<th>
								<button>Take Order</button>
								<button>Complete</button>
							</th>
						</thead>

						{/* <tbody>{this.tabRow()}</tbody> */}
					</table>
					{/* <div className='sidebar'>
						<button>Order history</button>
						<br />
						<button>Order Tracking </button>
					</div> */}
				</div>
			</div>
		);
	}
}
