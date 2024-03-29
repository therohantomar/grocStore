import express from "express";
// import { getProducts } from "../Controllers/getProducts.mjs";
// import { getUser } from "../Controllers/getProducts.mjs";
import { connection } from "../Services/connection.mjs";
import cors from "cors";
import bodyParser from "body-parser";
// import { createUser } from "../Controllers/getProducts.mjs";
// import { loginUser } from "../Controllers/getProducts.mjs";
// import { forgetPassword } from "../Controllers/getProducts.mjs";

connection();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  res.json("hello");
});
// app.get("/users/:id", getUser);
// app.post("/users", createUser);
// app.post("/users/login", loginUser);
// app.post("/users/forgetpassword", forgetPassword);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
