// Now i am going to learn about FS module
// 1.Read the file
// import fs from 'fs/promises'
// async function reading(){
//     try {
// const data=await fs.readFile('abhi.txt','utf-8')
// console.log('File me content h:',data);
//     } catch (error) {
//         console.log(error.message);
        
//     }
// }
// reading()


// //2. Creating the file

// import fs from 'fs/promises'
// async function writing(){
//     try {
// const data=await fs.writeFile('Cyvanta.txt','Currently Web development class is running')
// console.log('File is created successfully');
//     } catch (error) {
//         console.log(error.message);   
//     }
// }
// writing()


//3. delete the file

import fs from 'fs/promises'
async function DelFile(){
    try {
await fs.unlink('abhi.txt')
console.log('File is deleted successfully');
    } catch (error) {
        console.log(error.message);   
    }
}
DelFile()