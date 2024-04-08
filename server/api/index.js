import express from "express";

import { getUser } from "../Controllers/getUser.mjs";
import { connection } from "../Services/connection.mjs";
import cors from "cors";
import bodyParser from "body-parser";
import { getProducts } from "../Controllers/getProducts.mjs";
import { createUser } from "../Controllers/createUser.mjs";
import { loginUser } from "../Controllers/loginUser.mjs";
import { forgetPassword } from "../Controllers/forgetPassword.mjs";

const app = express();
// CORS middleware

// CORS middleware

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <style>
      h1 {
        text-align: center;
        color: #333;
        margin-top: 40px;
      }
    </style>
    <h1>👋 Welcome to grocStore API 🛍️</h1>
  `);
});
app.get("/users/:id", getUser);
app.get("/products", getProducts);
app.post("/users", createUser);
app.post("/users/login", loginUser);
app.post("/users/forgetpassword", forgetPassword);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
