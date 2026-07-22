import express from 'express'
import connectDb from './config/db.js'
import route from './routes/userRoutes.js'

const app=express()

app.use(express.json())   // it use to handle json formate req data

// database connection
connectDb()

// routes
app.use('/api',route)


app.listen(3000,()=>{
    console.log("Server is running now");
    
})

