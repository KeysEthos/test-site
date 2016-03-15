var path     = require('path');
var mongoose = require('mongoose');
var express  = require('express');
var router   = express.Router();
var signUp   = require('./module/signUp');
 
module.exports = function(app) {

// route middleware =======================================================
	router.get('/signUp', function(req, res, next) {
		signUp.find(function (err, signUp) {
			if (err) return next(err);
			res.json(signUp);
		});
	});
	router.post('/signUp', function(req, res, next){
		signUp.create(req.body, function(err, post) {
			if (err) return next(err);
			res.json(post);
		});
	});
	app.post('/signUp', function(req, res, next){
		var s = new signUp({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			school: req.body.school,
		})
	});
	router.put('/:id', function(req, res, next){
		signUp.findByIdAndUpdate(req.parama.id, req.body, function(err, post){
			if(err) return next(err);
			res.json(post);
		});
	});	
	// frontend routes =========================================================
	app.get('*', function(req, res) {
             res.sendFile(path.join(__dirname, '/public/index.html'));
        });
console.log('Routes Connected');
       };


