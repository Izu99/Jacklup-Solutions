import React, { Component } from "react";

import "../Styles/EmployeeView.css";
import axios from 'axios';
import EmployeeRow from './EmployeeRow';

export default class EmployeeView extends Component {


	
    constructor(props) {
        super(props);
        this.state = {employee : [], search:''};
        this.state.Station = this.props.match.params.id;

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/emplooyee/getall/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({employee : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.employee.map(function (object, i){
            return <EmployeeRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }


	render() {
		return (
			<div className='EmployeeView'>
				<h2 className='main-header'>Employee</h2>

				<table class='table table-striped'>
					{" "}
					<thead>
						<th></th>
						<th>Name</th>
						<th>Mobile</th>
						<th>E-mail</th>
						<th>Position</th>
						<th>Status</th>
						<th>Action</th>
					</thead>
					{/* <tr className='users'>
						<td className='user'>
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
						</td>
						<td>Name</td>
						<td>20</td>
						<td>
							<a href=''>email123@gmail.com</a>{" "}
						</td>
						<td>Event Planner</td>
						<td>Active</td>
						<td className="actions">
							<i class='fa-solid fa-pen'></i>
							<i class='fa-solid fa-exclamation'></i>
						</td>
					</tr> */}
				</table>
			</div>
		);
	}
}
