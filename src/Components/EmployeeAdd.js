import React, { Component } from "react";
import axios from 'axios';
import "../Styles/EmployeeAdd.css";

export default class EmployeeAdd extends Component {

    
    constructor(props) {
        super(props);
         this.onChangename = this.onChangename.bind(this);
         this.onChangeage = this.onChangeage.bind(this);
         this.onChangemobile = this.onChangemobile.bind(this);
         this.onChangetel = this.onChangetel.bind(this);
         this.onChangeemail = this.onChangeemail.bind(this);
         this.onChangeadress = this.onChangeadress.bind(this);
         this.onChangepassword = this.onChangepassword.bind(this);
         this.onChangecpassword = this.onChangecpassword.bind(this);
         this.onChangestatus = this.onChangestatus.bind(this);
         this.onChangeposision = this.onChangeposision.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            age: '',
            mobile:'',
            tel:'',
            email:'',
            adress:'',
            password:'',
            cpassword:'',
            posision:'',
            status:'',
            
        
        }
    }
     onChangename(e){
         this.setState( {
             name: e.target.value
         });
     }
    onChangeage(e){
        this.setState( {
            age: e.target.value
        });
    }
    onChangemobile(e){
        this.setState( {
            mobile: e.target.value,
        });
    }
    onChangetel(e){
        this.setState( {
            tel: e.target.value
        });
    }
    onChangeemail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangeadress(e){
        this.setState( {
            adress: e.target.value
        });
    }
    onChangepassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangecpassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onChangestatus(e){
        this.setState( {
            posision: e.target.value
        });
    }
    onChangeposision(e){
        this.setState( {
            status: e.target.value
        });
    }
 

    
    onSubmit(e){
        e.preventDefault();
        const obj = {
             name : this.state.name,
            age : this.state.age,
            mobile : this.state.mobile,
            tel : this.state.tel,
            email : this.state.email,
            adress : this.state.adress,
            password : this.state.password,
            cpassword : this.state.cpassword,
            posision : this.state.posision,
            status : this.state.status,
           
        };

        if(this.state.password === this.state.cpassword){
            if(this.state.age.length > 17){
                if(this.state.mobile.length === 10){
                    if(this.state.tel.length === 10 ){
                      
                            axios.post('http://localhost:4000/emplooyee/add',obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
                                        name: '',
                                        age: '',
                                        mobile:'',
                                        tel:'',
                                        email:'',
                                        adress:'',
                                        password:'',
                                        cpassword:'',
                                        posision:'',
                                        status:'',
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/inventoryView');
                        
                    } 
                    else {
                        alert('Invalid phone Number.. Pleace enter more than 10 digit.');
                    }
                }
                else{
                    alert('Invalid phone number.. Pleace enter more than 1o digits.');
                }
            } 
            else {
                alert('your age shoud ne more than 18');
            }
        }
            else {
                alert('Mismatch password.. Pleace enter same password');
            }
        
        
    }




	render() {
		return (
			<div className='EmployeeAdd'>
				<form onSubmit={this.onSubmit}>
           

                    <div className="detail">
                        <label htmlFor="">Name</label>
                        <input type="text" required value={this.state.name} onChang = {this.onChangename}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Age</label>
                        <input type="number" required value={this.state.age} onChang = {this.onChangeage}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Mobile</label>
                        <input type="number" required value={this.state.mobile} onChang = {this.onChangemobile}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Tel</label>
                        <input type="number" required value={this.state.tel} onChang = {this.onChangetel}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Email</label>
                        <input type="email" required value={this.state.email} onChang = {this.onChangeemail}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Address</label>
                        <input type="address" required value={this.state.adress} onChang = {this.onChangeadress}/>
                    </div>

                    <div className="detail">
                <label htmlFor="">Posision</label>
                <input type="text" required value={this.state.posision} onChange={this.onChangeposision}/>
            </div>
            <div className="detail">
                <label htmlFor="">Create Password</label>
                <input type="password" required value={this.state.password} onChange={this.onChangepassword}/>
            </div>
            <div className="detail">
                <label htmlFor="">Confirm Password</label>
                <input type="password" required value={this.state.cpassword} onChange={this.onChangecpassword}/>
            </div>


                    {/* <div className="detail">
                        <label htmlFor="">Posision</label>
                        <input type="address" required value={this.state.posision} onChang = {this.onChangeposision}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Create Password</label>
                        <input type="password" required value={this.state.password} onChang = {this.onChangepassword}/>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" required value={this.state.password} onChang = {this.onChangecpassword}/>
                    </div> */}

                    <button className="btn"> Save</button>
                    <button className="btn"> Cancel</button>
                </form>
			</div>
		);
	}
}
