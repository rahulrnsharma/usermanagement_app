const dbconnect = require('../config/configDB')
const ServiceModule = require('../Schema/serviceSchema');


const addService = async (req,resp)=>{
    try {
        await ServiceModule.create({name:req.body.service});
        resp.send("Hello");
    } catch (error) {
        resp.send(error);
    }
 
    
}
 
module.exports = {addService}