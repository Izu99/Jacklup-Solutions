import React, { Component } from "react";
import axios from "axios";
import logo from "../images/logo.svg";
import profile from "../images/profile-image3.svg";
import img1 from "../images/bottom-image.svg";
import ellipse1 from "../images/ellipse1.svg";
import polygon from "../images/Polygon.svg";
import ellipse2 from "../images/ellipse2.svg";
import ellipse3 from "../images/ellipse3.svg";
import "../Styles/EmployeeAdd.css";

export default class EmployeeAdd extends Component {
	constructor(props) {
		super(props);
		this.onChangename = this.onChangename.bind(this);
		this.onChangeage = this.onChangeage.bind(this);
		this.onChangemobile = this.onChangemobile.bind(this);
		this.onChangetel = this.onChangetel.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangeposision = this.onChangeposision.bind(this);
		this.onChangeadress = this.onChangeadress.bind(this);
		this.onChangepassword = this.onChangepassword.bind(this);
		this.onChangecpassword = this.onChangecpassword.bind(this);
		this.onChangestatus = this.onChangestatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "",
			age: "",
			mobile: "",
			tel: "",
			email: "",
			posision: "",
			adress: "",
			password: "",
			cpassword: "",
			status: "",
		};
	}
	onChangename(e) {
		this.setState({
			name: e.target.value,
		});
	}
	onChangeage(e) {
		this.setState({
			age: e.target.value,
		});
	}
	onChangemobile(e) {
		this.setState({
			mobile: e.target.value,
		});
	}
	onChangetel(e) {
		this.setState({
			tel: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangeposision(e) {
		this.setState({
			posision: e.target.value,
		});
	}
	onChangeadress(e) {
		this.setState({
			adress: e.target.value,
		});
	}
	onChangecpassword(e) {
		this.setState({
			cpassword: e.target.value,
		});
	}
	onChangepassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	onChangestatus(e) {
		this.setState({
			status: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			name: this.state.name,
			age: this.state.age,
			mobile: this.state.mobile,
			tel: this.state.tel,
			email: this.state.email,
			posision: this.state.posision,
			adress: this.state.adress,
			password: this.state.password,
			cpassword: this.state.cpassword,
			status: this.state.status,
		};

	
	 if (this.state.password === this.state.cpassword) {
	 	if (this.state.age > 17) {
	 		if (this.state.mobile.length === 10) {
	 			if (this.state.tel.length === 10) {
		axios.post("http://localhost:4000/emplooyee/add", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				name: "",
				age: "",
				mobile: "",
				tel: "",
				email: "",
				posision: "",
				adress: "",
				password: "",
				cpassword: "",
				status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/");
		 				} else {
		 					alert("Invalid phone Number.. Pleace enter more than 10 digit.");
		 				}
		 			} else {
		 				alert("Invalid phone number.. Pleace enter more than 1o digits.");
		 			}
		 		} else {
		 			alert("your age shoud ne more than 18");
		 		}
		 	} else {
		 		alert("Mismatch password.. Pleace enter same password");
		 	}
		 
	}

	render() {
		return (
			<div className='EmployeeAdd'>
				<form onSubmit={this.onSubmit}>
					<img src={logo} alt='' />
					<h2>New Employee Record</h2>
					<img src={ellipse1} alt='' className='ellipse1' />
					<div className='profile'>
						<img src={profile} alt='' />
						<div className='profile-button'>
							<button type='submit'>Browse</button>
							<br />
							<button type='submit'>Cancel</button>
						</div>
					</div>
					<div className='form'>
						<form className='form1'>
							<div className='detail'>
								<label htmlFor=''>Name</label>
								<input
									type='text'
									required
									value={this.state.name}
									onChange={this.onChangename}
								/>
							</div>
							<div className='detail'>
								<label htmlFor=''>Age</label>
								<input
									type='number'
									required
									value={this.state.age}
									onChange={this.onChangeage}
								/>
							</div>
							<div className='contact'>
								<div className='detail'>
									<label htmlFor=''>Mobile</label>
									<input
										type='number'
										required
										value={this.state.mobile}
										onChange={this.onChangemobile}
									/>
								</div>
								<div className='detail tel'>
									<label htmlFor=''>Tel</label>
									<input
										type='number'
										required
										value={this.state.tel}
										onChange={this.onChangetel}
									/>
								</div>
							</div>
							<div className='detail'>
								<label htmlFor=''>Email</label>
								<input
									type='email'
									required
									value={this.state.email}
									onChange={this.onChangeemail}
								/>
							</div>
							<div className='detail'>
								<label htmlFor=''>Address</label>
								<input
									type='address'
									required
									value={this.state.adress}
									onChange={this.onChangeadress}
								/>
							</div>

							<div className='detail'>
								<label htmlFor=''>Position</label>
								<input
									type='text'
									required
									value={this.state.posision}
									onChange={this.onChangeposision}
								/>
							</div>
						</form>
						<img src={ellipse2} alt='' className='ellipse2' />
						<img src={ellipse3} alt='' className='ellipse3' />
						<form action='' className='form2'>
							<div className='detail'>
								<label htmlFor=''>Create Password</label>
								<input
									type='password'
									required
									value={this.state.password}
									onChange={this.onChangepassword}
								/>
							</div>
							<div className='detail'>
								<label htmlFor=''>Confirm Password</label>
								<input
									type='password'
									required
									value={this.state.cpassword}
									onChange={this.onChangecpassword}
								/>
							</div>
						</form>
						<img src={img1} alt='' className='bottom-image' />
					</div>
					<img src={polygon} alt='' className='polygon1' />

					{/* <div className="detail">
                        <label
                        el htmlFor="">Posision</label>
                        <input type="address" required value={this.state.posision} onChange = {this.onChangeeposision}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Create Password</label>
                        <input type="password" required value={this.state.password} onChange = {this.onChangeepassword}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" required value={this.state.password} onChange = {this.onChangeecpassword}/>
                    </div> */}

					<button type='submit' className='btn'>
						{" "}
						Save
					</button>
					<button className='btn'> Cancel</button>
				</form>
			</div>
		);
	}
}
