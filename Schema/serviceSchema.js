const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceSchema = new schema({
    name: String,
})

const ServiceModule = mongoose.model('service',serviceSchema);

module.exports = ServiceModule;