import products from "../models/products.mjs";
import { connection } from "../Services/connection.mjs";

export const getProducts = async (req, res) => {
  try {
    // Establish the database connection
    await connection();

    // Retrieve products from the database
    const product = await products.find();

    // Send the products as a JSON response
    res.json(product);
  } catch (error) {
    console.error("Error getting products:", error);
    // Send an error response if something went wrong
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
