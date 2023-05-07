import React, { Component } from "react";
import axios from "axios";
import "../../Styles/OrderAll.css";
import TableRow from "./oderRow";
import jsPDF from "jspdf";
import 'jspdf-autotable';
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
	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = " Report";
        const headers = [["name", "date"]];
    
        const data = this.state.oder.map(elt=> [elt.name, elt.date]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
									
									All Oders
								</a>
							</li>
							{/* <li>
							<a href={"/halfpayment" }>Full Payment</a>

							</li> */}
							{/* <li>
									<a href={"/halfpayment" }>Haf payment</a>
							</li> */}
							
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
						{/* <center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center> */}
					  

					<div className='sidebar'>
						<button>Order history</button>
						<br />
						<button onClick={() => this.exportPDF()}>get report</button>
					</div>
				</div>
			</div>
		);
	}
}
