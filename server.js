// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var path           = require('path');
var router         = express.Router();

var routes = require('./app/routes');
var signUp = require('./app/models/signUp');

// configuration ===========================================

// db connection ========================================================================
 mongoose.connect('mongodb://127.0.0.1:27017/signUp', function(err){
      if (err) {
		console.log('connection error to db', err);
       } else {
		console.log('Connection Successful');
     }
});

var port = process.env.PORT || 8080;


var app = express();

// Get all data of body (POST) parameters
// Parse application/json
app.use(bodyParser.json());
app.use(methodOverride());

//parse 
app.use(bodyParser.urlencoded({ extended: true }));

//Server static app data from /public
app.use(express.static(__dirname + '/public'));


// Routes ===============================================================================
app.use('/signUp', signUp);
app.use('/', routes);

app.use('/signUp/:id', function(req, res, next){
	console.log('Request Type:', req.method);
	next();
});

//   =======================================================================
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port);  
console.log('Server started on ' + port);

