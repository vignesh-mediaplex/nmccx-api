// var model = require('../models');
var response = require('responses/response');
const sgMail = require('@sendgrid/mail');
 sgMail.setApiKey(process.env.SENDGRID_API_KEY);


module.exports = {
    
    addcontact: (req, res) => {
        console.log('============');
        console.log(req.body)
        const msg = {
            to: 'pooja.anoj@mediaplex.co.in',
            from: 'customersupport@nmccx.com',
            subject: 'contactUs',
            html: '<p><b>Name:</b>'+req.body.name+'<br><b>EmailId:</b>'+req.body.emailId+'<br><b>Mobile No.:</b>'+req.body.mobileNo+'<br><b>Message.:</b>'+req.body.message+'</p>',
            };
            console.log(msg)
            sgMail.send(msg, true);
            res.json({'status':200});
            // response.result(result, res);
        // model.contactus.create({
        //     contactId: req.body.contactId,
        //     name: req.body.name,
        //     emailId: req.body.emailId,
        //     mobileNo: req.body.mobileNo,
        //     message: req.body.message,
            

        // }).then(
        //     result => {
        //         response.result(result, res);
        //     },
        //     error => {
        //         console.log('error', error
        //         )
        //         response.error(error, res);
        //     }
        // );
    },
    listcontact: (req, res) => {

        model.contactus.findAll({

        }).then(
            result => {
                response.result(result, res);
            },
            error => {
                response.dberror(error, res);
            }
        );
    },

}
