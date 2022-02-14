const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const path = require('path');
const fs = require('fs')
const router = express.Router();
const request = require('request');

app.post('/hash', (req, res) => {
    console.log("Connected to React");
        var txnid = "";
        var length = 10; // 10 digits random transaction ID.
        var sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < length; i++) {
            txnid += sample.charAt(Math.floor(Math.random() * sample.length));
        }
        // console.log(txnid);

        var amount = 10;
        var productinfo = 'Myproduct';
        var firstname = 'geeta';
        var email = 'joshig@gmail.com';
        var phone = '9999111111';

        var surl = 'http://localhost:3000/response';
        var furl = 'http://localhost:3000/response';
        
        var key = 'Mykey';
        var salt = 'mysalt';
             // string hash format
        var str = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|' +
        '||||||||||' + salt;
        var hash = require('crypto').createHash('sha512').update(str).digest('hex');
        
        var service_provider = 'payu_paisa';

        var formData = {
            'key' : key,
            'txnid' : txnid,
            'amount' : amount,
            'productinfo' : productinfo,
            'firstname' : firstname,
            'email' : email,
            'phone' : phone,
            'surl' : surl,
            'furl' : furl,
            'hash' : hash,  
            'service_provider' : service_provider
        }

             var request = require('request');
        // for live key and salt - use 'https://secure.payu.in/_payment' 
        request.post('https://test.payu.in/_payment', {form: formData}, function(err, response, body) {
            var location = response.caseless.dict.location;
            res.redirect(location);
        }); 

});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port right now ${port}`));