const express = require('express');
const bankcardRoutes = express.Router();


let Bankcard = require('./bankcard.model');

bankcardRoutes.route('/add').post(function (req,res){
    let bankcard = new Bankcard(req.body);
    bankcard.save()
        .then(bankcard => {
            res.status(200).json({'bankcard' : 'new bankcard is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});



bankcardRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Bankcard.findById(id, function (err,bankcard){
        res.json(bankcard);
    });
});

bankcardRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Bankcard.findById(id, function (err, bankcard){
        if(!bankcard)
            res.status(404).send("Data is not found??");
        else{
            bankcard.name = req.body.name;
            bankcard.cardNo = req.body.cardNo;
            bankcard.exDate = req.body.exDate;
            bankcard.cvv = req.body.cvv;
          
 
            bankcard.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


bankcardRoutes.route('/delete/:id').get(function(req,res){
    Bankcard.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
bankcardRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Bankcard.find(function(err, bankcard) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(bankcard);
        }
    });
});





module.exports = bankcardRoutes;