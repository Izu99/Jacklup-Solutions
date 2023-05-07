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
         window.location.replace('/orderall');
     }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
            
        
               <td>
               <button className='edit'>  <Link to={"/updateorderinformation/"+this.props.obj._id} className="btn btn-success">Edit Oder</Link></button>
               &nbsp;
               <button className='take'>   <Link to={"/myOders/"+this.props.obj._id} className="btn btn-success">Take Oder</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className='delete'>Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;