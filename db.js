// TODO(jliebrand): this should be in ENV; not in code!

var mongoose = require('mongoose');

mongoose.connect('mongodb://bjorn:tennis2000@ds053139.mongolab.com:53139/burningworkout');

module.exports = mongoose.connection;