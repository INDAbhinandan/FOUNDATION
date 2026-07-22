import mongoose from "mongoose";

const connectDb=async()=>{

    try {
       await mongoose.connect('mongodb+srv://radha14241424_db_user:Radha1517@cluster0.lcv0lvx.mongodb.net/?appName=Cluster0')
   console.log("Database connected successfully");
   
    } catch (error) {
        console.log("Database connection failed:",error);
        console.log(error.message);
        process.exit(1)
        
        
    }
}


export default connectDb