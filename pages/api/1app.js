const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
var cors = require('cors')


const { Router } = require('express');

const app = express();
const port = process.env.PORT || 8080;

var corsOptions = {
  origin: 'http://mymarathalagna.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', cors(corsOptions),(req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  // console.log(req.body);

  // res.send(`I received your POST request. This is what you sent me: ${JSON.stringify(req.body)}`);
  // res.send({redirect: 'http://localhost:3000/success?a='+JSON.stringify(req.body)});
  // res.redirect('https://app.example.io?a=1');
  res.redirect('http://mymarathalagna.com/success?data='+JSON.stringify(req.body));


});

//Defining '/' route
app.get('/a',function(req,res){
  res.redirect('https://www.geeksforgeeks.org');
});
  
//Defining '/example' route
app.get('/example',function(req,res){
  res.redirect('https://www.geeksforgeeks.org/array-data-structure/');
});
  
//Defining '/redex' route
app.get('/redex',function(req,res){
  res.redirect('back');
})


app.listen(port, () => console.log(`Listening on port ${port}`));