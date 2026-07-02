// Synchronous ->One by one program execute
// Ex-Making tea

function starting(){
console.log("Add milk and water and put pot on stove");
} 

function sugerTea(){
    console.log("Add suger and tea in starting");   
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


