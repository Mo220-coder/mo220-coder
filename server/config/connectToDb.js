import mongoose from "mongoose"

let isConnected = false;

export const connectToDb =async ()=> {
    if(isConnected) {
        console.log("MongoDb is already connected");
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "TaskNotes"
        });
        isConnected = true;
        console.log("mongoDb is connected");
        return true
    } catch (error) {
       console.error("Error connecting to MongoDb", error);
       throw new Error("Failed to connect to mongoDb");
    }
};

