import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connection = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // This option is deprecated
    });

    // Retrieve the 'product' collection
    const collection = mongoose.connection.collection("product");

    return collection;
  } catch (err) {
    console.error("Error retrieving product data:", err);
    throw err; // Re-throw the error for handling elsewhere if needed
  }
};
