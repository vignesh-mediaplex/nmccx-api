var express = require('express');
var appRouter = express.Router();
var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var registerRouter = require('../routes/register');

appRouter.use('/', indexRouter);
appRouter.use('/contact', contactRouter);
appRouter.use('/register', registerRouter);

module.exports = appRouter;