import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app=express()

// routes
app.use('/api/users',userRoutes)

app.use(express.json())
const port=3000
// creating server
app.listen(port,(req,res)=>{
    console.log(`Server is running at port no ${port}`);
    
})
