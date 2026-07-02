// ASynchronous -> It excute the programe un ordered way
// Ex-Making tea

function starting(){
setTimeout(()=>{
        console.log("Add milk and water and put pot on stove"); 
    },2000)

} 

function sugerTea(){
    setTimeout(()=>{
        console.log("Go to shop for buy Suger and tea and add it in starting");   
    },5000)
}

function serve(){
    console.log("Serving tea with biscuit");
    
}

// synchronously calling the functions
function call(){
    starting()
    sugerTea()
    serve()
}

call()


