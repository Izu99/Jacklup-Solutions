const express = require('express');
const oderRoutes = express.Router();


let Oder = require('./oder.model');

oderRoutes.route('/add').post(function (req,res){
    let oder = new Oder(req.body);
    oder.save()
        .then(oder => {
            res.status(200).json({'oder' : 'new oder is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

// oderRoutes.route('/:id').get(function (req, res){
//     let pCode = req.params.id;
//     console.log("your product code id is " +pCode);
//     oder.findOne({$and:[{pCode : pCode}]},function (err,std){
//         if(err)
//             console.log(err);
//         else{
//             res.json(std)
//         }
//     });

// });

oderRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Oder.findById(id, function (err,oder){
        res.json(oder);
    });
});

oderRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Oder.findById(id, function (err, oder){
        if(!oder)
            res.status(404).send("Data is not found??");
        else{
            oder.name = req.body.name;
            oder.email = req.body.email;
            oder.oderNo = req.body.oderNo;
            oder.mobile = req.body.mobile;
            oder.description = req.body.description;
            oder.date = req.body.date;
       
            oder.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


oderRoutes.route('/delete/:id').get(function(req,res){
    Oder.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
oderRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Oder.find(function(err, oder) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(oder);
        }
    });
});







module.exports = oderRoutes;