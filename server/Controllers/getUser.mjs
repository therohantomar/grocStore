import Product from "../models/products.mjs";
import { connection } from "../Services/connection.mjs";
const client = connection();
export const getUser = async (req, res) => {
  const id = req.params.id;

  connection()
    .then(async () => {
      await Product.find()
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
