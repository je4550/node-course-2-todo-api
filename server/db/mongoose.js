const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:test1234@ds159661.mlab.com:59661/todos);

module.exports = {
    mongoose
}