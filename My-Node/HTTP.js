// Creating server using HTTP module

import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const server=http.createServer((req,res)=>{

res.writeHead(200,{'content-Type':'text/plain'})  // set the header of content
    res.end("Hello server live ho gaya h")        // send the response on server
})

let port=process.env.PORT
server.listen(port,()=>{
    console.log("Server is running");          // set the port no for server
    
})