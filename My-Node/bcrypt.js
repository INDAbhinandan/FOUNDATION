import bcrypt from 'bcrypt'

let password1='radhe2456'        // plain pass
let password2='Abhi@123'

let hashpass1=await bcrypt.hash(password1,5)   // encrypted pass
let hashpass2=await bcrypt.hash(password2,5)
// console.log('hash pass:  ',hashpass);

// companre
let isMatch1=await bcrypt.compare(password1,hashpass1)
let isMatch2=await bcrypt.compare(password2,hashpass1)

console.log(isMatch1);
console.log(isMatch2);

