import express from "express";
import { getProducts } from "./Controllers/getProducts.mjs";
import { getUser } from "./Controllers/getUser.mjs";
import { connection } from "./Services/connection.mjs";

const client = await connection();
console.log(client.isConnected()); // true
const app = express();

app.get("/products", getProducts);
app.get("/users/:id", getUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
