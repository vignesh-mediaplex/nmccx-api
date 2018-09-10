// var model = require('../models');
var response = require('responses/response');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {

    addregister: (req, res) => {
        console.log(req.body)
        if(req.body.membertype==6){
        const msg = {
            to: 'pooja.anoj@mediaplex.co.in',
            from: 'customersupport@nmccx.com',
            subject: 'Pcm leads',
            html: '<p><b>Name:</b>' + req.body.name + '<br><b>EmailId:</b>' + req.body.emailId + '<br><b>Mobile No.:</b>' + req.body.mobileNo + '<br><b>Address.:</b>' + req.body.address + '<br><b>Country:</b>' + req.body.country + '<br><b>State:</b>' + req.body.state +'<br><b>City:</b>' + req.body.city +'<br><b>pincode:</b>' + req.body.pincode +'<br><b>Member For:</b>Pcm<br><b>Higher Education:</b>' + req.body.high_edu +'<br><b>Experience:</b>' + req.body.experience +'<br><b>Firm Name:</b>' + req.body.firmname +'</p>',
        };
        console.log(msg)
        sgMail.send(msg, true);}
        else{
            const msg = {
                to: 'vignesh.narayanan@mediaplex.co.in',
                from: 'customersupport@nmccx.com',
                subject: 'Tm leads',
                html: '<p><b>Name:</b>' + req.body.name + '<br><b>EmailId:</b>' + req.body.emailId + '<br><b>Mobile No.:</b>' + req.body.mobileNo + '<br><b>Address.:</b>' + req.body.address + '<br><b>Country:</b>' + req.body.country + '<br><b>State:</b>' + req.body.state +'<br><b>City:</b>' + req.body.city +'<br><b>pincode:</b>' + req.body.pincode +'<br><b>Member For:</b>Tm<br><b>Higher Education:</b>' + req.body.high_edu +'<br><b>Experience:</b>' + req.body.experience +'<br><b>Firm Name:</b>' + req.body.firmname +'</p>',
            };
            console.log(msg)
            sgMail.send(msg, true);
        }
        res.json({'status':200});
        // sgMail.send(msg, true, function(err, info){
        //     if (err ){
        //       console.log(error);
        //     }
        //     else {
        //       console.log('Message sent: ' + info.response);
        //     }
        // });

        // model.registers.create({
        //     id: req.body.id,
        //     name: req.body.name,
        //     emailId: req.body.emailId,
        //     mobileNo: req.body.mobileNo,
        //     address: req.body.address,
        //     country: req.body.country,
        //     state: req.body.state,
        //     city: req.body.city,
        //     pincode: req.body.pincode,
        //     membertype: req.body.membertype,
        //     high_edu: req.body.high_edu,
        //     experience: req.body.experience,
        //     firmname: req.body.firmname,


        // }).then(
        //     result => {
        //         response.result(result,res);
        //     },
        //     error => {
        //         if (error.errors[0].type == 'Validation error') {
        //             response.validationError(error, res);
        //         }
        //         else {
        //             response.dberror(error, res);
        //         }
        //     }
        // );
    },
    listregister: (req, res) => {

        model.register.findAll({

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
