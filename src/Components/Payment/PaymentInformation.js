/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import axios from "axios";
import "../../Styles/PaymentInformation.css";

export default class PaymentInformation extends Component {
	constructor(props) {
		super(props);

		this.onChangepstatus = this.onChangepstatus.bind(this);
		this.onChangeoderNo = this.onChangeoderNo.bind(this);

		this.onChangecard = this.onChangecard.bind(this);
		this.onChangeexdate = this.onChangeexdate.bind(this);
		this.onChangecvv = this.onChangecvv.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			oderNo: "",
			jtype: "",
			date: "",
			price: "",
			pstatus: "",
			payId: "",
			card: "",
			exdate: "",
			cvv: "",
		};

		
	}

	onChangepstatus(e) {
		this.setState({
			pstatus: e.target.value,
		});
	}

	onChangecard(e) {
		this.setState({
			card: e.target.value,
		});
	}

	onChangeexdate(e) {
		this.setState({
			exdate: e.target.value,
		});
	}


	onChangecvv(e) {
		this.setState({
			cvv: e.target.value,
		});
	}

	onChangeoderNo(e) {
		this.setState({
			oderNo: e.target.value,
			payId:"Pay"+ e.target.value.substring(0, 4)

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

		this.state.payId = "Pay0" + this.state.oderNo.substring(2, 6);

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
			payId: this.state.payId,
			card: this.state.card,
			exdate: this.state.exdate,
			cvv: this.state.cvv,
		};
		// const today = new Date(); // get today's date
		// const minExDate = new  Date("04/09/2023"); // set minimum expiration date to October 1, 2023
		// const maxExDate = new Date("10/09/2028");

		alert("Your payId is - " + this.state.payId);

		if (this.state.card.length === 12) {
			// if (this.state.exdate > minExDate && this.state.exdate < maxExDate) {
				if (this.state.cvv.length === 3 ) {
		axios
			.post("http://localhost:4000/pay/add", obj)

			.then((res) => {
				alert("add Successfully");
				this.setState({
					pstatus: "",
					card: "",
					exdate: "",
					cvv: "",
				});
				console.log(res.data);
			});
		this.props.history.push("/paymenthistory");
	} 
	else {
		alert("pleace enter 3 digits cvv number");
	}
	// } 
	// else {
	// 	alert("Invalid Card Number pleace enter 2023 or less than 2029");
	// }
} 
else {
	alert("Invalid Card Number pleace enter 12 digits");
}
}

	render() {
		return (
			<div className='PaymentInformation'>
				<h2 className='title'>Payment Information</h2>
				<form onSubmit={this.onSubmit}>
				<form action='' className='form1'>
					<label htmlFor='payment'>
						{" "}
						<p className='radio-title'> Payment Status</p>

						<input type='radio' name='payment' value='full'  onChange={this.onChangepstatus}
										 />
						Full Payment
						<input type='radio' name='payment' className='rd1' value='half'	
										onChange={this.onChangepstatus} />
						Half Payment
					</label>

					
						<br />
						<br />
						<p className='radio-title'>Payment Type</p>
					
					
						<div className='switch'>
						
							
								<div className='switch2'>
									<table>
										<tr>
											<td className='details'>Card Number</td>
											<td>
												<input type='text' required value={this.state.card}	onChange={this.onChangecard} />
											</td>
										</tr>
										<tr>
											<td className='details'> Expire Date</td>
											<td>
												<input type='date' required value={this.state.exdate}	onChange={this.onChangeexdate}  />
											</td>
										</tr>
										<tr>
											<td className='details'>Cvv Number</td>
											<td>
												<input type='text' required value={this.state.cvv}	onChange={this.onChangecvv} />
											</td>
										</tr>
									</table>
									
								</div>
							</div>
							
				
				
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
										onChange={this.onChangeoderNo}
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
					
				</form>
				<button type='submit'>Pay Now</button>
				</form>
			</div>
		);
	}
}
