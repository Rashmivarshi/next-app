import mongoose from "mongoose";

const connection = {};
export const connectDb = async () => {
  try {
    if (connection.isconnected) {
      console.log("database connectction exist");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isconnected = db.connections[0].readyState;
    // console.log(db);
  } catch (error) {
    console.log(error);
    throw new Error("database not connected");
  }
};
