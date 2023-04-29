/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Oder = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    mobile: {
        type: String
    },
    description: {
        type: String
    }
 
 },
  {
    collation: 'oder'
});

module.exports = mongoose.model('Oder',Oder);