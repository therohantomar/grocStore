import Product from "../models/products.mjs";
import { connection } from "../Services/connection.mjs";

export const getProducts = async (req, res) => {

  connection()
    .then(async () => {
       await Product.find()
        .maxTimeMS(300000) // Set timeout to 30 seconds
        .then((products) => {
          res.json({products})
        })
        .catch((error) => {
          console.error("Error finding products:", error);
        });
    })
    .catch(() => console.error("connection denied!"));
};
