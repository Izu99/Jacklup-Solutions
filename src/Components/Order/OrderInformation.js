import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderInformation.css";

export default class OrderInformation extends Component {

	constructor(props) {
		super(props);
		this.onChangename = this.onChangename.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangeaddress = this.onChangeaddress.bind(this);
		this.onChangemobile = this.onChangemobile.bind(this);
		this.onChangedescription = this.onChangedescription.bind(this);
		
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "",
			email: "",
			address: "",
			mobile: "",
			description: "",
			
		};
	}
	onChangename(e) {
		this.setState({
			name: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangeaddress(e) {
		this.setState({
			address: e.target.value,
		});
	}
	onChangemobile(e) {
		this.setState({
			mobile: e.target.value,
		});
	}
	onChangedescription(e) {
		this.setState({
			description: e.target.value,
		});
	}
	



	onSubmit(e) {
		e.preventDefault();
		const obj = {
			name: this.state.name,
			email: this.state.email,
			address: this.state.address,
			mobile: this.state.mobile,
			description: this.state.description
			
		};


	 		if (this.state.mobile.length === 10) {
	 			if (this.state.description.length > 5) {
		axios.post("http://localhost:4000/oder/add", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				name: "",
				email: "",
				address: "",
				mobile: "",
				description: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/");
		 				} else {
		 					alert("Insert more than 5 characters..");
		 				}
		 			} else {
		 				alert("Invalid phone number.. Pleace enter more than 1o digits.");
		 			}
		 	
		 	
		 
	}


	render() {
		return (
			<div className='OrderInformation'>
				<h2> Order Information</h2>
				<form onSubmit={this.onSubmit}>
				<form action='' className='form1'>
					<label htmlFor=''>Full Name</label>
					<input type='text' required
									value={this.state.name}
									onChange={this.onChangename}/>
					<br />
					<br />
					<label htmlFor=''>Email</label>
					<input type='email' required
									value={this.state.email}
									onChange={this.onChangeemail}/>
					<br />
					<br />
					<label htmlFor=''>Address</label>
					<input type='text' required
									value={this.state.address}
									onChange={this.onChangeaddress}/>
					<br />
					<br />
					<label htmlFor=''>Phone Number</label>
					<input type='number' required
									value={this.state.mobile}
									onChange={this.onChangemobile}/>
					<br />
					<br />
					<label htmlFor=''>Description</label>
					<textarea name='' id='' cols='30' rows='10'required
									value={this.state.description}
									onChange={this.onChangedescription}/>
          <button type='submit'>Submit</button>
				</form>
				</form>

				<form action='' className='form2'>
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
