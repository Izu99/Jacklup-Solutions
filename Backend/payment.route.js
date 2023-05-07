const express = require('express');
const paymentRoutes = express.Router();


let Payment = require('./payment.model');

paymentRoutes.route('/add').post(function (req,res){
    let payment = new Payment(req.body);
    payment.save()
        .then(payment => {
            res.status(200).json({'payment' : 'new payment is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});


paymentRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Payment.findById(id, function (err,payment){
        res.json(payment);
    });
});

paymentRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Payment.findById(id, function (err, payment){
        if(!payment)
            res.status(404).send("Data is not found??");
        else{
            payment.oderNo = req.body.oderNo;
            payment.pstatus = req.body.pstatus;
            payment.date = req.body.date;
            payment.price = req.body.price;
            payment.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


paymentRoutes.route('/delete/:id').get(function(req,res){
    Payment.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
paymentRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Payment.find(function(err, payment) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(payment);
        }
    });
});


paymentRoutes.route('/search/:pathParam1?').get(function (req, res){
    let search = req.params.pathParam1;
    // let email = req.params.pathParam2;
    console.log("your search is "+search);

    // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
        Payment.find({$and:[{$or: [{pstatus: search}]}]},function (err,srch){ 
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });

});








module.exports = paymentRoutes;