// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var methodOverride = require('method-override');
var mongo          = require('mongodb');
var mongoose       = require('mongoose');
var path           = require('path');
var router         = express.Router();

var routes         = require('./app/routes');

// configuration ==========================================
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Server static app data from /public
app.use(express.static(__dirname + '/public'));

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// development error handler
// // will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// Production Error Handler ===============================
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
// Routing Setup =============================================

router.use(function(req, res, next) {
    console.log('something is happening.');
    next();
});
router.get('/signUp', function(req, res) {
    res.json({ message: 'Get Request Made' });
});
app.use('/api', router);
require('./app/routes')(app);


app.listen(port);  
console.log('Server started on ' + port);







