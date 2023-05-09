/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Payment = new Schema({
    oderNo: {
        type: String
    },
    pstatus: {
        type: String
    },
    date: {
        type: String
    },
    price: {
        type: String
    }
    ,
    card: {
        type: String
    }
    ,
    exdate: {
        type: String
    }
    ,
    cvv: {
        type: String
    }
    ,
    payId: {
        type: String
    }
 },
  {
    collation: 'payment'
});

module.exports = mongoose.model('Payment',Payment);