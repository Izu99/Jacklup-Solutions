import React, { Component } from "react";
import axios from "axios";
 import "../../Styles/OrderAll.css";
 import TableRow from "./paymnetRow";

export default class Payment extends Component {

	constructor(props) {
		super(props);
		this.state = { payment: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
        axios.get('http://localhost:4000/pay/search/'+this.props.match.params.pathParam1)
		
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ payment: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	 tabRow() {
	 	return this.state.payment.map(function (object, i) {
	 		return <TableRow obj={object} key={i} />;
	 	});	
	 }


	render() {
		const half = "half";
		const full = "full";
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Payment History </h2>
					
					<div className='top-nav'>
						<ul>
							<li>
							<a href={"/paymenthistory" }>All </a>
							</li>
							 <li>
							 <a href={"/halfpayment/" + half}>half payment</a>

							</li> 
							 <li>
									<a href={"/fullpayment/"+full }>full payment</a>
							</li> 
							
						</ul>
					</div>
					<table>
						<thead>
							<th>Invoice</th>
                            <th>Status</th>
							<th>Order Date</th>
							<th>Balance</th>
						
						</thead>
					
						 <tbody>{this.tabRow()}</tbody> 
					</table>
					<div className='sidebar'>
						<button>Order history</button>
						<br />
						
					</div>
				</div>
			</div>
		);
	}
}
