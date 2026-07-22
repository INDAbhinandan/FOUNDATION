import express from 'express'
const app=express()
app.listen(2000,()=>{
    console.log("Server is running at port no :2000");
})


// app.get('/',(req,res)=>{     // http://localhost:2000/
//     res.send("This is the home page of Server")
// })

// app.get('/product',(req,res)=>{     // http://localhost:2000/product
//     res.send("Your product will be show here")
// })

// app.post('/login',(req,res)=>{     // http://localhost:2000/login
//     res.send("You are login successfully")
// })

// app.use(express.json())
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send(req.body)
// })

app.use(express.json())                          // json ka data read kr ske
app.use(express.urlencoded({extended:true}))    // html form ka data read kr ske
app.post('/signin',(req,res)=>{                // http://localhost:2000/signin
    console.log(req.body);
    res.send({
        message:"data is sent",
        data:req.body
    })
})
