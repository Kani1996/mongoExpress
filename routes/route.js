const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
//retrieving data

router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    });
    // res.send('Retrieving the contact list');
});

//add data

router.post('/contacts', (req, res, next) => {
    //logic to add data 
    let newContact = new Contact({
        name: req.body.name,
        yearsOfExperience: req.body.yearsOfExperience,
        favouriteTech: req.body.favouriteTech,
        currentTech: req.body.currentTech,
        dotnet: req.body.dotnet,
        java: req.body.java,
        database: req.body.database,
        bigdata: req.body.bigdata
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Failed to add contact' });
        }
        else {
            res.json({ msg: 'Contact added successfully' });
        }
    });
});

//delete data
router.delete('/contact/:id', (req, res, next) => {
    //logic to delete data 
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;