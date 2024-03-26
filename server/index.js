import express from "express";
import { getProducts } from "./Controllers/getProducts.mjs";
import { getUser } from "./Controllers/getUser.mjs";
import { connection } from "./Services/connection.mjs";
import cors from "cors";
import bodyParser from "body-parser";

connection();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", getProducts);
app.get("/users/:id", getUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
