//firstly import dotenv and express 
require('dotenv').config()
const express=require('express')
const router=require('./Routes/Routes')
require('./connections/db')

const cors=require('cors')

//create server
const server=express()

server.use(cors())  // cors - its a midlleware ,  it can handle the data communication between two different orgin .its check the responces are coming from the genuine source.
server.use(express.json()) // it can convert the json content to native form , it a type of  middleware 
server.use(router)

server.use('/uploads', express.static('./uploads'))  // its used for frontent edit student detilas model - show the added image 



const PORT=3000 || process.env.PORT
server.listen(PORT , ()=>{
    console.log(`server running at ${PORT}`)
})