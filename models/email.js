var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Email = new Schema({
    subject: {
        type: String,
        default: '<No Subject>'
    },
    body: String,
    from: String,
    trusted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Email', Email);