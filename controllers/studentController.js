const students = require('../models/studentModel')
const { findById } = require('../models/userModel')

exports.addStudent = async (req, res) => {
    try {
        const teacherid = req.payload
        const { name, phone, batch } = req.body
        const image = req.file.filename
        const newStudent = new students({
            name, batch, phone, image, teacherid
        })
        await newStudent.save()
        res.status(200).json(newStudent)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.getstudents = async (req, res) => {
    const search=req.query.search
    console.log(search)
    try {
        const teacherid = req.payload
        const studentlist = await students.find({ teacherid , name:{$regex:search , $options:'i'} })
        res.status(200).json(studentlist)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.delstudent = async (req, res) => {
    try {
        const {sid}= req. params
        const result= await students.findOneAndDelete({_id:sid})
        res.status(200) . json(result)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.updateStudent = async (req, res) => {
    try {
        const {sid}=req.params
        if(req.file){
            var image=req.file.filename
            var {name , batch , phone}= req. body
        }else{
            var {name , batch , phone , image} = req . body
        }
        const existingstudent = await students.findById(sid)
        existingstudent.name=name 
        existingstudent.batch=batch
        existingstudent.phone=phone
        existingstudent.image=image
        await existingstudent.save()
        res.status(200).json(existingstudent)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}




