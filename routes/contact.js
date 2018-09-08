var express = require('express');
var router = express.Router();
var contact = require('../v1/controllers/contact.controller');


router.post('/addcontact',  contact.addcontact);
router.get('/listcontact', contact.listcontact);

module.exports = router;