var express = require('express');
var router = express.Router();
var register = require('../v1/controllers/register.controller');


router.post('/addregister',  register.addregister);
router.get('/listregister', register.listregister);

module.exports = router;