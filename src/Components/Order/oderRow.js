import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/oder/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Order Successfully Deleted....")
        window.location.replace('/inventoryView/'+this.props.obj.email);
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.address}
               </td>
               <td>
                   {this.props.obj.mobile}
               </td>
               <td>
                   {this.props.obj.description}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   <Link to={"/EditEmployee/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;