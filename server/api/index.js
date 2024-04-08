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
const allowCrossDomain = (req, res, next) => {
  res.header(
    `Access-Control-Allow-Origin`,
    `https://groc-store-5d1c.vercel.app`,
    "http://localhost:3000"
  );
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

// CORS middleware

app.configure(() => {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: `cool beans` }));
  app.use(express.methodOverride());
  // CORS middleware
  app.use(allowCrossDomain);
  app.use(app.router);
  app.use(express.static(`public`));
});
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173/",
      "https://groc-store-5d1c.vercel.app",
    ],
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
