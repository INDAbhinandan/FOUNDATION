import mongoose from "mongoose";

const connectdb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://abhisakhhusingh_db_user:Abhisakhhu1517@cluster0.hm6vnge.mongodb.net/?appName=Cluster0')
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default connectdb