import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'

dotenv.config()

const app=express()

app.use(express.json())

connectdb()

// creating server
app.listen(process.env.PORT,()=>{
    console.log('Server is running at port no : ',process.env.PORT);
    
})
console.log(process.env.MONGO_URI);

