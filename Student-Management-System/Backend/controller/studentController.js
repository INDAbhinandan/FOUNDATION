import student from "../model/studentModel.js";
// creating student
export const CreateStd=async(req,res)=>{
    try {
        const result=await student.create(req.body)
         res.status(200).json({
            success:true,
           data:result,
           message:"Student create successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}
// reading all student
export const ReadStd=async(req,res)=>{
    try {
        const result=await student.find()
         res.status(200).json({
            success:true,
           data:result,
           message:"Student fetched successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

// reading one student by id
export const ReadStdbyId=async(req,res)=>{
    try {
        const result=await student.findById(req.params.id)
         if(!result){
 res.status(500).json({
            success:false,
            message:'student not found'
        })
         }
         res.status(200).json({
            success:true,
           data:result,
           message:"Student fetched successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

// update std
export const updatestd=async(req,res)=>{
    try {
        const result=await student.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true,runValidators:true})
        if(!result){
             res.status(404).json({
            success:false,
            message:"Student is not found"
        })
        }

         res.status(200).json({
            success:true,
            message:"Student updated successfully",
            data:result

        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// delete std
export const deletestd=async(req,res)=>{
    try {
        const result=await student.findByIdAndDelete(req.params.id)
        if(!result){
             res.status(404).json({
            success:false,
            message:"Student is not found"
        })
        }

         res.status(200).json({
            success:true,
            message:"Student delete successfully",
            data:result

        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}