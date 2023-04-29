import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderInformation.css";

export default class OrderInformation extends Component {

	constructor(props) {
		super(props);
		this.onChangename = this.onChangename.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		// this.onChangeoderNo = this.onChangeoderNo.bind(this);
		this.onChangemobile = this.onChangemobile.bind(this);
		this.onChangedescription = this.onChangedescription.bind(this);
		this.onChangedescription = this.onChangedescription.bind(this);
		this.onChangedate = this.onChangedate.bind(this);
		
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "",
			email: "",
			oderNo: "",
			mobile: "",
			description: "",
			date: "",

			
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

	onChangemobile(e) {
		this.setState({
			mobile: e.target.value,
			oderNo:"IV"+ e.target.value.substring(6, 10)

		});
	}
	onChangedescription(e) {
		this.setState({
			description: e.target.value,
		});
	}
	onChangedate(e) {
		this.setState({
			date: e.target.value,
		});
	}
	



	onSubmit(e) {
		e.preventDefault();
		const obj = {
			name: this.state.name,
			email: this.state.email,
			oderNo: this.state.oderNo,
			mobile: this.state.mobile,
			description: this.state.description,
			date: this.state.date
			
		};

		alert("Your oderNo is - " +this.state.oderNo);
	 		if (this.state.mobile.length === 10) {
	 			if (this.state.description.length > 5) {
		axios.post("http://localhost:4000/oder/add", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				name: "",
			email: "",
			mobile: "",
			description: "",
			date: "",
			
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
				{/* <form action='' className='form1'> */}
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
			
					<label htmlFor=''>Phone Number</label>
					<input type='number' required
									value={this.state.mobile}
									onChange={this.onChangemobile}/>
					<br />
					<br />
					<label htmlFor=''>OderNu</label>
					<input type='text' required
									value={this.state.oderNo}
									// onChange={this.onChangeaddress}
									/>
					<br />
					<br /> 
					<label htmlFor=''>Date</label>
					<input name='' id='' cols='30' rows='10'required
									value={this.state.date}
									onChange={this.onChangedate}/>
								<br />
					<br /> 	
					<label htmlFor=''>Description</label>
					<textarea name='' id='' cols='30' rows='10'required
									value={this.state.description}
									onChange={this.onChangedescription}/>
									<br />
					<br />
				
          <button type='submit'>Submit</button>
				{/* </form> */}
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
