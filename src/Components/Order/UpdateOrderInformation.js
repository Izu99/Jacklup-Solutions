import React, { Component } from 'react';

import '../../Styles/UpdateOrderInformation.css';

export default class UpdateOrderInformation extends Component {
  render() {
    return (
      <div className='UpdateOrderInformation'>
        <h2>Update Order Information</h2>
        <form action="" className='form1'>
        <label htmlFor="">Full Name</label>
        <input type="text" /><br /><br />
        <label htmlFor="">Email</label>
        <input type="email" /><br /><br />
        <label htmlFor="">Address</label>
        <input type="text" /><br /><br />
        <label htmlFor="">Phone Number</label>
        <input type="number" /><br /><br />
        <label htmlFor="">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>

        <form action="" className='form2'>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </form>


      </div>
      
    );
  }
}