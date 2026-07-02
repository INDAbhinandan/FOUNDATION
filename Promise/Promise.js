// Promise -> JavaScript Promises were created to make asynchronous JavaScript easier to use.

// A Promise object represents the completion or failure of an asynchronous operation.
// Ex-Making tea

function starting(){
    const prms= new Promise((resolve,reject)=>{
setTimeout(()=>{
        console.log("Add milk and water and put pot on stove"); 
        resolve()
    },2000)
    })
return prms
} 

function sugerTea(){
   const prms=new Promise((resolve, reject) => {
     setTimeout(()=>{
        console.log("Go to shop for buy Suger and tea and add it in starting");   
    resolve()
    },5000)
   })
   return prms
}

function serve(){
    console.log("Serving tea with biscuit");   
}

// synchronously calling the functions
function call(){
    starting()
    .then(sugerTea)
    .then(serve)
    
}

call()


