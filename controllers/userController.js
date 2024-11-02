const users=require('../models/userModel')
const jwt=require('jsonwebtoken')  // used for authentication easy and security


exports.userRegistration=async(req , res)=>{
    try{
        console.log(req.body)
        const { email , username , password} = req . body
        if(!email || !username || !password){
            res.status(400).json("Invalid data")
        }else{
            const newUser= new users({
                email , username , password         // email: email , username : username , passsword : password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
   
}

exports.userLogin=async(req , res)=>{
    try{
        const { email , password } = req . body
    if(!email || !password){
        res.status(400).json("Invalid data")
    }
    else{
        const exictingUser= await users.findOne({email , password})
        if(exictingUser){
            //sign() - used to create token 
            const token=jwt.sign({userid:exictingUser._id} , process.env.SECRET_KEY)
            res.status(200).json({token , username:exictingUser.username})
        }else{
            res.status(400).json("Invalid email / password")
        }
    }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

