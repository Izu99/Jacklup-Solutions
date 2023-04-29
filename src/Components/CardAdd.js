import React, { Component } from 'react';

import '../Styles/CardAdd.css';

export default class CardAdd extends Component {
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="">Full Name</label>
            <input type="text" /><br />
            <label htmlFor="">Card Number</label>
            <input type="number" /><br />
            <label htmlFor="">Expire date</label>
            <input type="date" /><br />
            <label htmlFor="">Cvv</label>
            <input type="number" />

            <button type='submit'>Add Card</button>
        </form>
      
      </div>
    );
  }
}