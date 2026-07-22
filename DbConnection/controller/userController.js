import user from "../Model/userModel.js";


// create user
export const userCreation=async(req,res)=>{
    const data=await user.create(req.body)
    res.send({
        message:"User created successfully",
        data:data
    })
}

// get user
export const userRead=async(req,res)=>{
    const data=await user.find()
    res.send({
        message:"User find successfully",
        data:data
    })
}