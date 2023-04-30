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
				<h2 className='title'>Payment Information</h2>
				<form action='' className='form1'>
					<label htmlFor='payment'>
						{" "}
						<p className='radio-title'> Payment Status</p>
						{/* <br /> */}
						{/* <br /> */}
						<input type='radio' name='payment' />
						Full Payment
						<input type='radio' name='payment' className='rd1' />
						Half Payment
					</label>
					<br />
					<br />
					<p className='radio-title'>Payment Type</p>
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
							className='rd1'
						/>
						Bank Deposit
					</label>
					<div className='switch'>
						{/* Credit Card details retrieve from the table */}
						{this.state.selectedSwitch === "switch1" && (
							<div className='switch2'>
								<table>
									<tr>
										<td className='details'>Card Number</td>
										<td>
											<input type='text' />
										</td>
									</tr>
									<tr>
										<td className='details'> Expire Date</td>
										<td>
											<input type='date' />
										</td>
									</tr>
									<tr>
										<td className='details'>Cvv Number</td>
										<td>
											<input type='text' />
										</td>
									</tr>
								</table>
								<button type='submit'>Pay Now</button>
							</div>
						)}

						{/* Company Bank Details */}
						{this.state.selectedSwitch === "switch2" && (
							<div className='switch1'>
								<p className='bank-title'>Bank Information</p>
								<p className='details'>Name: Jacklup Solution</p>
								<p className='details'>Acc Number: 10000000</p>
								<p className='details'>Bank: BOC</p>
								<p className='details'>Branch: Piliyandala</p>

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
