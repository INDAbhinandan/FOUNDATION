import dotenv from 'dotenv'

dotenv.config()

const myName=process.env.NAME

console.log(myName);
console.log(process.env.ADD);

