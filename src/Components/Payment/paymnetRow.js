import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class cTableRow extends Component {
    constructor(props) {
        super(props);
        // this.delete = this.delete.bind(this);
    }
    // delete(){
    //     axios.get('http://localhost:4000/oder/delete/'+this.props.obj._id)
    //         .then(this.setState({redirect: true}))
    //         .catch(err => console.log(err))
    //     //this.props.history.push('/index');
    //     alert("Your Order Successfully Deleted....")
    //     window.location.replace('/inventoryView/'+this.props.obj.email);
    // }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.oderNo}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
            
            
        
               <td>
                   <Link to={"/paymentinformation/"+this.props.obj._id} className="btn btn-success">pay</Link>
                   {/* <br/><br/> */}  &nbsp;
                   {/* <button onClick={this.delete} className="btn btn-danger">Delete</button> */}
               </td>
           </tr>
        );
    }
}

export default cTableRow;