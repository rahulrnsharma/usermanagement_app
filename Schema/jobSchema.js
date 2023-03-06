const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobSchema = new schema({
    position:{
        type: String,
        require :true
    },
    siklls:{
         type:String,
         require :true
    },
    location:{
      type:String,
      require: true 
    },
    experience:{
        type: String,
        require: true
    }, 
    discription:{
        type: String,
        require: true
    },
    Qualification:{
        type: String,
        require: true
    },
    lastDateapply:{
        type:Date,
        
    }

})

const JobModule = mongoose.model('job',jobSchema);

module.exports = JobModule;