const  mongoose= require('mongoose');
mongoose.set('strictQuery', true);

const dbconnect = mongoose.connect(process.env.DB_CONNECTION)

module.exports = dbconnect;
