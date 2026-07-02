// // Callback -> A callback function is a function that is passed as an argument to another function and executed later.
// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.
// Ex-Making tea

function starting(callback) {
    setTimeout(() => {
        console.log("Add milk and water and put pot on stove");
        callback()
    }, 2000)

}

function sugerTea(callback) {
    setTimeout(() => {
        console.log("Go to shop for buy Suger and tea and add it in starting");
        callback()
    }, 5000)
}

function serve(callback) {
    console.log("Serving tea with biscuit");
    callback()

}

// synchronously calling the functions
function call() {
starting(()=>{
    sugerTea(()=>{
        serve(()=>{       //->callback hell generated here
            console.log("Task is completed");
            
        })
    })
})
}

call()


