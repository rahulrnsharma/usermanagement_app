const mongoose = require('mongoose');
const schema = mongoose.Schema;
const RegSchema =  new schema(
    {
        email:{
            type:String,
            require: true,
            unique:true
        },
        name:{
            type:String,
            require: true
        },
        mobile:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require: true,
            select:false
        }

    }
)

const RegModel = mongoose.model('registration',RegSchema)

module.exports = RegModel