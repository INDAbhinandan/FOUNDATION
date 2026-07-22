const check=(req,res,next)=>{
console.log("Request recived");
console.log("Method",req.method);
console.log("URL ",req.url);
next()
}

export default check;