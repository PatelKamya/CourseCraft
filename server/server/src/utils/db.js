import mongoose from "mongoose";

const connectDB = async () => {
  try {
        const DB_NAME = process.env.DB_NAME;
   await mongoose.connect(`${process.env.MONGODB_URL_STG}/${DB_NAME}`);
        console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;