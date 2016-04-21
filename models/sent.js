var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Sent = new Schema({
    subject: {
        type: String,
        default: '<No Subject>'
    },
    to: String,
    body: String
});

module.exports = mongoose.model('Sent', Sent);