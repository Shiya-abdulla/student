const express=require('express')
const userController=require('../controllers/userController')
const studentController=require("../controllers/studentController")
const jwtMiddle=require('../Middleware/jwtmiddleware')
const multerConfig=require('../Middleware/multerConfig')

const router=express.Router()

router.post('/reg', userController.userRegistration)
router.post('/log', userController.userLogin)

router.post('/addstudent',jwtMiddle,multerConfig.single('image'), studentController.addStudent)
router.get('/getstudent',jwtMiddle, studentController.getstudents)
router.delete('/delstudent/:sid',jwtMiddle, studentController.delstudent)
router.put('/updatestudent/:sid',jwtMiddle,multerConfig.single('image'), studentController.updateStudent)






module.exports=router