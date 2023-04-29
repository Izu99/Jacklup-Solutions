import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderInformation.css";

export default class OrderInformation extends Component {

	constructor(props) {
		super(props);
		this.onChangename = this.onChangename.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		 this.onChangeoderNo = this.onChangeoderNo.bind(this);
		this.onChangemobile = this.onChangemobile.bind(this);
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
            status: "",

			
		};
	}


    componentDidMount() {
        
        axios.get('http://localhost:4000/oder/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    oderNo: res.data.oderNo,
                  name: res.data.name,
                  email: res.data.email,
                  address: res.data.address,
                  mobile: res.data.mobile,
                  description: res.data.description,
                  date: res.data.date,
        
                   
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
	onChangedate(e) {
		this.setState({
			date: e.target.value,
		});
	}
	
    onChangeoderNo(e) {
		this.setState({
			oderNo: e.target.value,
		});
	}


	onSubmit(e) {

        
	this.state.status = "complete";

		e.preventDefault();
		const obj = {
			name: this.state.name,
			email: this.state.email,
			oderNo: this.state.oderNo,
			mobile: this.state.mobile,
			description: this.state.description,
			date: this.state.date,
            status: this.state.status,
			
		};

		// alert("Your oderNo is - " +this.state.oderNo);
	 		if (this.state.mobile.length === 10) {
	 			if (this.state.description.length > 5) {
                    axios.post('http://localhost:4000/myOder/update/'+this.props.match.params.id,obj)
		.then((res) => {
			alert("add Successfully");
			this.setState({
				name: "",
			email: "",
			mobile: "",
			description: "",
			date: "",
            oderNo: "",
          
			
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
                <label htmlFor=''>INV no :</label>
					<input type='text' required readOnly
									value={this.state.oderNo}
									onChange={this.onChangeoderNo}/>
					<br />
					<br />

					<label htmlFor=''>Full Name</label>
					<input type='text' required readOnly
									value={this.state.name}
									onChange={this.onChangename}/>
					<br />
					<br />
					<label htmlFor=''>Email</label>
					<input type='email' required readOnly
									value={this.state.email}
									onChange={this.onChangeemail}/>
					<br />
					<br />
			
					<label htmlFor=''>Phone Number</label>
					<input type='number' required readOnly
									value={this.state.mobile}
									onChange={this.onChangemobile}/>
					<br />
					<br />
			
					<label htmlFor=''>Delivery Date</label>
					<input name='' id='' cols='30' rows='10' required readOnly
									value={this.state.date}
									onChange={this.onChangedate}/>
								<br />
					<br /> 	
					<label htmlFor=''>Description</label>
					<textarea name='' id='' cols='30' rows='10' required readOnly
									value={this.state.description}
									onChange={this.onChangedescription}/>
									<br />
					<br />
				
          <button type='submit'>Accept Oder</button>
				{/* </form> */}
				</form>

			
			</div>
		);
	}
}
