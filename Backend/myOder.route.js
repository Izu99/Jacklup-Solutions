const express = require('express');
const myOderRoutes = express.Router();


let MyOder = require('./myOder.model');

myOderRoutes.route('/add').post(function (req,res){
    let myOder = new MyOder(req.body);
    myOder.save()
        .then(oder => {
            res.status(200).json({'oder' : 'new oder is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});



myOderRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    MyOder.findById(id, function (err,oder){
        res.json(oder);
    });
});

 myOderRoutes.route('/update/:id').post(function (req,res){
     let id = req.params.id;
     MyOder.findById(id, function (err, myOder){
         if(!myOder)
             res.status(404).send("Data is not found??");
         else{
             myOder.name = req.body.name;
             myOder.email = req.body.email;
             myOder.oderNo = req.body.oderNo;
             myOder.mobile = req.body.mobile;
             myOder.description = req.body.description;
             myOder.date = req.body.date;    
             myOder.status = req.body.status;    
             myOder.save().then(business => {
                 res.json('Update Complete');
             })
                 .catch(err =>{
                     res.status(400).send("Unable to update data");
                 });
         }
     });
 });


myOderRoutes.route('/delete/:id').get(function(req,res){
    MyOder.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
myOderRoutes.route('/getall/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    MyOder.find(function(err, oder) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(oder);
        }
    });
});

//get all details
// Define a route for getting all customers
myOderRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    MyOder.find(function(err, oder) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(oder);
        }
    });
});


myOderRoutes.route('/search/:pathParam1?').get(function (req, res){
    let search = req.params.pathParam1;
    // let email = req.params.pathParam2;
    console.log("your search is "+search);

    // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
        MyOder.find({$and:[{$or: [{status: search}]}]},function (err,srch){ 
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });

});




module.exports = myOderRoutes;