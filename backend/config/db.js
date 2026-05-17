import mongoose from "mongoose";

export const connectDB= async () => {
    await mongoose.connect("mongodb+srv://guchhaitanubrata_db_user:j0BxrSu5axu64HLO@cluster0.u4uzhys.mongodb.net/MediCare")
    .then(()=>{
        console.log("DB COnnected");
        
    })
}