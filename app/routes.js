var path     = require('path');
var signUp   = require('./models/signUp.js');
var mongoose = require('mongoose');
var express  = require('express');
var router   = express.Router();

// grab the .js model
module.exports = function(app) {
	
	router.get('/', function(req, res, next) {
		signUp.find(function (err, todos) {
			if (err) return next(err);
			res.json(signUp);
		});
	});
	router.post('/', function(req, res, next){
		signUp.create(req.body, function(err, post) {
			if (err) return next(err);
			res.json(post);
		});
	});
	app.post('/', function(req, res, next){
		new signUp({
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
             res.sendFile(path.join(__dirname, './public/index.html'));
        });

       }; 

