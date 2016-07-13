var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

var options = {
  url: 'http://ab44513583e1711e6b0ef02e4cf15b02-1319127330.eu-central-1.elb.amazonaws.com:8001/login',
  method: 'POST',
  form: {
    "username": "username",
    "password": "passwort",
    "eauth": "pam"
  }
};

router.get('/meow', function(req, res, next) {

  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data.return[0].token);
      res.writeHead(200);
      res.end('It works!');
    } else {
      res.writeHead(503);
      res.end('Not available');
    }
  });

});

module.exports = router;
