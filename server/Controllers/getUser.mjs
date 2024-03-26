import products from "../models/products.mjs";
import { connection } from "../Services/connection.mjs";

export const getUser = async (req, res) => {
  connection()
    .then(async () => {
      await products
        .find()
        .maxTimeMS(300000) // Set timeout to 30 seconds
        .then((products) => {
          console.log("All products:", products);
        })
        .catch((error) => {
          console.error("Error finding products:", error);
        });
    })
    .catch(() => console.error("connection denied!"));
};
