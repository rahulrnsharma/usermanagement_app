const express= require('express');
const router = express.Router();
const serviceController = require('../Controllers/servicesAPI');
const UserController = require('../Controllers/RegistrationAPI')
const verfiyUser = require('../middelware/authuser')

const sendmail = require('../Controllers/sendmail')
const jobController = require('../Controllers/jobAPI')
router.get('/sendmail',sendmail)
router.get('/',serviceController.addService)
router.post('/addservice',serviceController.addService) 
router.post('/addjob',jobController.addJob) 
router.post('/registeruser',UserController.registerUser);
router.post('/login',UserController.loginUser)
router.post('/edit',verfiyUser,UserController.profileEdit) 
router.post('/deleteuser',verfiyUser,UserController.deleteUser)
router.get('/gallery',verfiyUser,UserController.accessGallery)
router.get('/logout',UserController.logout)
module.exports = router;  