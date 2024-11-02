const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    teacherid:{
        type:String,
        required:true
    }
})

const students=mongoose.model('students',studentSchema)

module.exports=students