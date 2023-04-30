import React, { Component } from "react";
import axios from "axios";
import "../../Styles/PaymentInformation.css";

export default class PaymentInformation extends Component {
	constructor(props) {
		super(props);

		this.onChangepstatus = this.onChangepstatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			selectedSwitch: "switch1",
			oderNo: "",
			jtype: "",
			date: "",
			price: "",
			pstatus: "",
		};

		this.handleSwitchChange = this.handleSwitchChange.bind(this);
	}

	handleSwitchChange(event) {
		this.setState({
			selectedSwitch: event.target.value,
		});
	}

	onChangepstatus(e) {
		this.setState({
			pstatus: e.target.value,
		});
	}

	componentDidMount() {
		axios
			.get("http://localhost:4000/myOder/edit/" + this.props.match.params.id)
			.then((res) => {
				this.setState({
					oderNo: res.data.oderNo,
					name: res.data.name,
					email: res.data.email,
					address: res.data.address,
					mobile: res.data.mobile,
					description: res.data.description,
					date: res.data.date,
					price: res.data.price,
					jtype: res.data.jtype,
				});
			})
			.catch(function (error) {
				console.log("Can't Get Data");
			});
	}

	onSubmit(e) {
		let balance = 0;

		if (this.state.pstatus == "full") {
			balance = this.state.price - this.state.price;
		} else if (this.state.pstatus == "half") {
			balance = this.state.price / 2;
		}
		this.state.price = balance;
		this.state.status = "complete";

		e.preventDefault();
		const obj = {
			email: this.state.email,
			oderNo: this.state.oderNo,
			date: this.state.date,
			pstatus: this.state.pstatus,
			price: this.state.price,
			jtype: this.state.jtype,
		};

		alert("Your balance is - " + this.state.price);

		axios
			.post("http://localhost:4000/pay/add", obj)

			.then((res) => {
				alert("add Successfully");
				this.setState({
					pstatus: "",
				});
				console.log(res.data);
			});
		this.props.history.push("/");
	}

	render() {
		return (
			<div className='PaymentInformation'>
				<h2 className='title'>Payment Information</h2>
				<form action='' className='form1'>
					<label htmlFor='payment'>
						{" "}
						<p className='radio-title'> Payment Status</p>
						<input type='radio' name='payment' value='full' />
						Full Payment
						<input type='radio' name='payment' className='rd1' value='half' />
					</label>
					<h2>Payment Information</h2>
					<form onSubmit={this.onSubmit}>
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
					</form>
					<form action='' className='form2'>
						<h2>Order Summary</h2>
						<table>
							<tr>
								<td>
									{" "}
									<label htmlFor=''>INV no:</label>
									<input
										type='text'
										required
										readOnly
										value={this.state.oderNo}
									/>
								</td>
							</tr>
							<tr>
								<td>
									{" "}
									<label htmlFor=''>Item</label>
									<input
										type='text'
										required
										readOnly
										value={this.state.jtype}
									/>
								</td>
							</tr>
							<tr>
								<td>
									{" "}
									<label htmlFor=''>Delivery Date</label>
									<input
										type='text'
										required
										readOnly
										value={this.state.date}
									/>
								</td>
							</tr>
							<tr>
								<td>
									{" "}
									<label htmlFor=''>Amount</label>
									<input
										type='text'
										required
										readOnly
										value={this.state.price}
									/>
								</td>
							</tr>
						</table>
					</form>
					<button type='submit'>Pay Now</button>
				</form>
			</div>
		);
	}
}
