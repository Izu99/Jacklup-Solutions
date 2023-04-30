import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderAll.css";
import TableRow from "./oderRow";
export default class OrderAll extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
			// activeTab: "allpayment",
	// 	};
	// 	this.handleTabClick = this.handleTabClick.bind(this);
	// }

	handleTabClick(tab) {
		this.setState({
			// activeTab: tab,
		});
	}

	constructor(props) {
		super(props);
		this.state = { oder: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);

		// this.state = { activeTab: "allorder" };
		this.handleTabClick = this.handleTabClick.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/oder/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ oder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.oder.map(function (object, i) {
			return <TableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	render() {
		// const { activeTab } = this.state;
		return (
			<div className='OrderAll'>
				<div className='history'>
					<h2>Order</h2>
					<div className='top-nav'>
						<ul>
							<li>
								<a
									href='#'
									// onClick={() => this.handleTabClick("allorder")}
									// className={activeTab === "allorder" ? "active" : ""}>
									>
									
									All Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									// onClick={() => this.handleTabClick("completeorder")}
									// className={activeTab === "completeorder" ? "active" : ""}>
									>
									
									Full Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									// onClick={() => this.handleTabClick("ongoingorder")}
									// className={activeTab === "ongoingorder" ? "active" : ""}>
									>
									
									Half Payment
								</a>
							</li>
							<li>
								<a
									href='#'
									// onClick={() => this.handleTabClick("deleteorder")}
									// className={activeTab === "deleteorder" ? "active" : ""}>
									>
									
									Refund
								</a>
							</li>
						</ul>
					</div>
					{/* {activeTab === "allorder" && ( */}
						<table className='allorder'>
							<thead>
								<th>Invoice</th>
								<th>Order Date</th>
							</thead>

							<tbody>{this.tabRow()}</tbody>
						</table>
					{/* )} */}

					{/* {activeTab === "completeorder" && ( */}
						{/* <table>
							<h2> Complete Order</h2>{" "}
						</table> */}
					{/* )} */}

					{/* {activeTab === "ongoingorder" && ( */}
						{/* <table>
							<h2>Ongoing Order</h2>
						</table> */}
					{/* )} */}

					{/* {activeTab === "deleteorder" && ( */}
						{/* <table>
							<h2>Delete Order</h2>
						</table> */}
					{/* )} */}    

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
