
const jwt = require('jsonwebtoken');
const secretkey = "secretkey";
const  verfiyUser= (req,resp,next)=>{
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")[1];
        jwt.verify(bearer, secretkey, async (err, authData) => {
            if(err){
                resp.send(err)
            }
              else{
                req.user=authData;
                next();
                
              }
        })
    } else {
        resp.status(401).send('unauthorized');
    }
} 
 
module.exports = verfiyUser    