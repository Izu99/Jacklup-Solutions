/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


MyOder = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    oderNo: {
        type: String
    },
    mobile: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    }
    ,
    status: {
        type: String
    }
 
 },
  {
    collation: 'myOder'
});

module.exports = mongoose.model('MyOder',MyOder);