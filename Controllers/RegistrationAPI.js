const dbconnect = require('../config/configDB');
const RegModel = require('../Schema/RegSchema');
const registerService = require('../services/registerServices')
const jwt = require('jsonwebtoken');
const cookie = require('cookie')

const registerUser = async (req, resp) => {
    try {
        const email = req.body.email;
        const name = req.body.name;
        const mobile = req.body.mobile;
        const password = req.body.password;
        registerService.createUser(name, email, mobile, password)
        resp.send('User Added Succesfully');
    } catch (error) {
        resp.send(error)
    } 
}

const loginUser = async (req, resp) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const logedUser = await registerService.findUser(email, password);
        jwt.sign({ userId:logedUser._id }, process.env.secretkey, { expiresIn: "20000s" }, (err, token) => {
            resp.json({
                token
            })
        })
    } catch (error) {
        resp.send(error)
    }
}

const profileEdit = async (req, resp) => {
    try {  
        const userid = req.user.userId;
        const updatedmobile = req.body.mobile;
        const updatedpassword = req.body.password;
        registerService.findUserAndUpdate( userid,updatedmobile, updatedpassword)
        resp.status(200).send("Profile Updated Sucessfully")
    } catch (error) {
        resp.send(error)
    } 
}
const deleteUser = async (req, resp) => {
    try {
        registerService.deleteActiveUser(req.user.userId)
        resp.send("User Deleted Sucessfully")
    } catch (error) {
        resp.send(error);
    }
}

const accessGallery = async (req, resp) => {
    try {
         registerService.findUser(req.user.userId)
        resp.send("Gallery Accessed By " + authData.logedUser.email);

    } catch (error) {

    }
}

const logout = async (req, resp) => {
    try {
        resp.cookie('jwt', '', { maxAge: 1 })
    } catch (error) {
        resp.send(error)
    }
}
module.exports = { registerUser, loginUser, profileEdit, deleteUser, accessGallery, logout }