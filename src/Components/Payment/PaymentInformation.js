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
        
        axios.get('http://localhost:4000/myOder/edit/'+this.props.match.params.id)
            .then(res => {
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
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

	
	onSubmit(e) {
		let balance = 0;

		if (this.state.pstatus == "full") {
			balance =    this.state.price - this.state.price;
		} else if (this.state.pstatus == "half") {
			balance =    this.state.price  / 2;
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
	
			 alert("Your balance is - " +  this.state.price);
			
			 axios.post("http://localhost:4000/pay/add", obj)
					
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
				<h2>Payment Information</h2>
				<form onSubmit={this.onSubmit}>
				{/* <form action='' className='form1'> */}
					<label htmlFor='payment'>
						{" "}
						Payment Status
						<input type='radio' name='payment' 	  value="full"
									onChange={this.onChangepstatus}/>
						Full Payment
						<input type='radio' name='payment' 	 value="half"
									onChange={this.onChangepstatus}/>
						Half Payment
					</label>
					<br />
					<br />
					{/* <p>Payment Type</p>
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
					</label> */}
					{/* <div className='switch'>
           
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
					</div> */}
				
				
				<form action='' className='form2'>
					<h2>Order Summary</h2>
					<table>
						<tr>
							<td>	<label htmlFor=''>INV no:</label>
					<input type='text' required readOnly
									value={this.state.oderNo}
									/></td>
						</tr>
						<tr>
							<td>	<label htmlFor=''>Item</label>
					<input type='text' required readOnly
									value={this.state.jtype}
									/></td>
						</tr>
						<tr>
							<td>	<label htmlFor=''>Delivery Date</label>
					<input type='text' required readOnly
									value={this.state.date}
									/></td>
						</tr>
						<tr>
							<td>	<label htmlFor=''>Amount</label>
					<input type='text' required readOnly
									value={this.state.price}
									/></td>
						</tr>
					</table>
				</form>
				<button type='submit'>Pay Now</button>
				</form>

				
			</div>
		);
	}
}
