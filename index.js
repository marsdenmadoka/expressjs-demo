var express = require('express');
var bodyParser = require('body-parser')//use to handle POST requests
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/assets',express.static('assets')); //we handling the static files using the express middlware

app.set('view engine','ejs'); //seting the view engine


app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');//you don't require view enginee here to call  the index.html
});

app.get('/users', function(req, res) {
res.send('show all users!');
});

app.get('/usersdata/:id', function(req,res){
res.send('you requested to see profile with id '+req.params.id)  
});

app.get('/contact', function(req,res){
res.render('contact',{qs:req.query}); //query strings
});
app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact-success',{data:req.body}); //handling post request using body-parser middleware to fire the POST request
    });

app.get('/profile/:name', function(req, res){ //the use of view enginee ...res.render
    var data={age:29, job:'ninja',hobbies:['eating','figthing','drinking','playing']};
    res.render('profile',{person: req.params.name,data:data });//here now we need view engines to handle this view since it is an ejs file
    });                   //we use template in order to inject some dynamic content 


var server = app.listen(5000, function() {
console.log('Server started');
});
/*
N/B we use render to call ejs files
ejs files can replace html files 

*/