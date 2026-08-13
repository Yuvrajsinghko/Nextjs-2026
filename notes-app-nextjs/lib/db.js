import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes-app");
  } catch (error) {
    console.log(error);
  }
}
