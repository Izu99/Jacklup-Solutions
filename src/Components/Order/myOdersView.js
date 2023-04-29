import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderAll.css";
import TableRow from "./myOderRow";
export default class OrderAll extends Component {

	constructor(props) {
		super(props);
		this.state = { myoder: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/myOder/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ myoder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.myoder.map(function (object, i) {
			return <TableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}


	render() {
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Order</h2>
					<table>
						<thead>
							<th>Invoice</th>
                            <th>Status</th>
							<th>Order Date</th>
						
						</thead>
					
						<tbody>{this.tabRow()}</tbody>
					</table>
					<div className='sidebar'>
						<button>Order history</button>
						<br />
						<button>Order Tracking </button>
					</div>
				</div>
			</div>
		);
	}
}
