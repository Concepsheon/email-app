var express = require('express');
var Email = require("../models/email");
var Sent = require('../models/sent');
var router = express.Router();

//get emails
router.get('/emails',function(req, res, next) {
  Email.find(function(err, emails){
      if(err){
          console.log('failed to retrieve emails');
          next(err);
      }
      res.json(emails);
  });
})


.get('/emails/:email',function(req,res,next){
  var query = ({_id: req.params.email});
  Email.findOne(query).exec(function(err, email){
    if(err){
      next(err);
    }
    res.json(email);
  });
});

//get sent emails

router.post('/sent',function(req,res,next){
  var sent = new Sent(req.body);
  
  sent.save(function(err, sentEmail){
    if(err){
      next(err);
    }
    console.log('email sent');
    res.json(sentEmail);
  });
  
})

.get('/sent', function(req,res,next){
  Sent.find(function(err, sentEmails){
    if(err){
      next(err);
    }
    res.json(sentEmails);
  });
})

.get('/sent/:sent', function(req,res, next){
  var query = ({_id: req.params.sent});
  Sent.findOne(query).exec(function(err, sentemail){
    if(err){
      next(err);
    }
    res.json(sentemail);
  });
});

module.exports = router;
