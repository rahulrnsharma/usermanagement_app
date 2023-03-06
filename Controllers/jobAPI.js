const dbconnect = require('../config/configDB');
const JobModule = require('../Schema/jobSchema');


const addJob = async (req,resp)=>{
    await JobModule.create({position:req.body.position,location:req.body.location,discription:req.body.discription,Qualification:req.body.Qualification,skills:req.body.skills,experience:req.body.experience});
    resp.send("Hello"+ req.body);
}
module.exports = {addJob}