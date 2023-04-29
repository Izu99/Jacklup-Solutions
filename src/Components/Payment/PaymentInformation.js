import React, { Component } from "react";

import "../../Styles/PaymentInformation.css";

export default class PaymentInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSwitch: "switch1",
		};

		this.handleSwitchChange = this.handleSwitchChange.bind(this);
	}

	handleSwitchChange(event) {
		this.setState({
			selectedSwitch: event.target.value,
		});
	}

	render() {
		return (
			<div className='PaymentInformation'>
				<h2>Payment Information</h2>
				<form action='' className='form1'>
					<label htmlFor='payment'>
						{" "}
						Payment Status
						<input type='radio' name='payment' />
						Full Payment
						<input type='radio' name='payment' />
						Half Payment
					</label>
					<br />
					<br />
					<p>Payment Type</p>
					<label>
						<input
							type='radio'
							name='switch'
							value='switch1'
							checked={this.state.selectedSwitch === "switch1"}
							onChange={this.handleSwitchChange}
						/>
						Credit Card
					</label>
					<label>
						<input
							type='radio'
							name='switch'
							value='switch2'
							checked={this.state.selectedSwitch === "switch2"}
							onChange={this.handleSwitchChange}
						/>
						Bank Deposit
					</label>
					<div className='switch'>
						{this.state.selectedSwitch === "switch1" && (
							<div className='switch2'>
								<table>
									<tr>
										<td>Card Number</td>
										<td>00000000000000</td>
									</tr>
									<tr>
										<td> Expire Date</td>
										<td>01/02/2011</td>
									</tr>
									<tr>
										<td>Cvv Number</td>
										<td> 000</td>
									</tr>
								</table>
							</div>
						)}
						{this.state.selectedSwitch === "switch2" && (
							<div className='switch1'>
								<p>Bank Information</p>
								<p>Name: Jacklup Solution</p>
								<p>Acc Number: 10000000</p>
								<p>Bank: BOC</p>
								<p>Branch: Piliyandala</p>

								<label htmlFor=''>
									Upload Official Bank Statement
									<input type='file' />
								</label>
							</div>
						)}
					</div>
					<button type='submit'>Pay Now</button>
				</form>

				<form action='' className='form2'>
					<h2>Order Summary</h2>
					<table>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
					</table>
				</form>
			</div>
		);
	}
}
