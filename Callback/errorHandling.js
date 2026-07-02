function starting(callback) {
    setTimeout(() => {
        console.log("Add milk and water and put pot on stove");
        callback()
    }, 2000)

}

function sugerTea(callback) {
    setTimeout(() => {
        console.log("Go to shop for buy Suger and tea and add it in starting");
       const  error=new Error("Dukan Band h nahi milegaa saman")
        callback(error)
    }, 5000)
}

function serve(callback) {
    console.log("Serving tea with biscuit");
    callback()

}

// synchronously calling the functions
function call() {
starting(()=>{
    sugerTea((error)=>{
        if(error){
            console.log(error);   
        }
        serve(()=>{       //->callback hell generated here
            console.log("Task is completed");
            
        })
    })
})
}

call()


