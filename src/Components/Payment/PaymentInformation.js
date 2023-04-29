import React, { Component } from 'react';

import '../../Styles/PaymentInformation.css';

export default class PaymentInformation extends Component {
  render() {
    return (
      <div className='PaymentInformation'>
				<h2>Payment Information</h2>
				<form action='' className='form1'>
					<label htmlFor=""> Payment Status</label>
                    <input type="number" /><br /><br />
                    <label htmlFor="">Payment Type</label>
                    <select name="" id=""><br /><br />
                        <option value="">Credit Card</option>
                        <option value="">Bank Deposit</option>
                    </select>
                    <br /><br />

                    <p>Bank Information</p>
                    <p>Name: Jacklup Solution</p>
                    <p>Acc Number: 10000000</p>
                    <p>Bank: BOC</p>
                    <p>Branch: Piliyandala</p>

                    <label htmlFor="">Upload Official Bank Statement</label>
                    <input type="file" />
          <button type='submit'>Pay Now</button>
				</form>

				<form action='' className='form2'>
                    <h2>Order Summary</h2>
					<table>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
						<tr>
							<td>table data</td>
						</tr>
					</table>
				
				</form>
			</div>
    );
  }
}