const mongoose=require('mongoose')

const connectionstring=process.env.DB_CONNECTION

mongoose.connect(connectionstring).then(res=>{
    console.log("server connected to Mongodb")
}).catch((err)=>{
    console.log(err)
})