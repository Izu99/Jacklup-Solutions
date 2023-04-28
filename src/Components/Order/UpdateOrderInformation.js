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

  componentDidMount() {
    // alert('edit id ' +this.props.match.params.id);
    axios.get('http://localhost:4000/oder/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({
              name: res.data.name,
              email: res.data.email,
              address: res.data.address,
              mobile: res.data.mobile,
              description: res.data.description,
    
               
            });
        })
        .catch(function (error){
            console.log("Can't Get Data");
        })
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
          axios.post('http://localhost:4000/oder/update/'+this.props.match.params.id,obj)
.then((res) => {
			alert("update Successfully");
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
