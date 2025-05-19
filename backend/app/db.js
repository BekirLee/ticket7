import dotenv from "dotenv";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected");
  } catch (err) {
    console.log(err, "db.js");
    process.exit(1);
  }
};

export default connectDb;
