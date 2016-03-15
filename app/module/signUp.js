var mongoose = require('mongoose');

var signUpSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
	gender: String,
        school: String,
        updated_at: {type: Date, default: Date.now},
});

module.exports = ('signUp', signUpSchema);
