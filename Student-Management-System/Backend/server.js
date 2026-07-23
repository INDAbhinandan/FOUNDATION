import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import route from './routes/studentRoutes.js'
// env file configration
dotenv.config()

const app=express()

// for handling json data
app.use(express.json())

// database connection
connectdb()

// routes define

app.use('/api/student',route)
// creating server
app.listen(process.env.PORT,()=>{
    console.log('Server is running at port no : ',process.env.PORT);
    
})
console.log(process.env.MONGO_URI);

