/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Bankcard = new Schema({
    name: {
        type: String
    },
    cardNo: {
        type: String
    },
    exDate: {
        type: String
    },
    cvv: {
        type: String
    }
 
 },
  {
    collation: 'bankcard'
});

module.exports = mongoose.model('Bankcard',Bankcard);