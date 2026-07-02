// ASynchronous -> It excute the programe un ordered way
// Ex-Making tea

function starting(){
return prms=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Add milk and water and put pot on stove"); 
        resolve()
    },2000)
})

} 

function sugerTea(){
   return prms=new Promise((resolve, reject) => {
     setTimeout(()=>{
        console.log("Go to shop for buy Suger and tea and add it in starting");  
        reject(new Error("kuch to h")) 
    },5000)
   })
}

function serve(){
    console.log("Serving tea with biscuit");
    
}

// synchronously calling the functions
async function call(){
    try {
       await starting() 
    } catch (error) {
        console.log("Error h:",error);
        
    }

     try {
    await sugerTea()
    } catch (error) {
        console.log("Error h:",error);
        
    }
    try {
  await serve()
    } catch (error) {
        console.log("Error h:",error);
        
    }
}

call()




