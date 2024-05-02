import { connection } from "../Services/connection.mjs";
import users from "../models/users.mjs";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { config } from "dotenv";

config();

export const reAuthenticate = async (req, res) => {
  const { authtoken } = req.body;

  try {
    // Establish the database connection
    await connection();

    // Verify the authentication token
    const user = jwt.verify(authtoken, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });

    // Check if the token is expired
    const decoded = jwt.decode(authtoken);
    if (decoded.exp < Date.now() / 1000) {
      throw new TokenExpiredError("jwt expired", decoded.exp);
    }

    // Find the user with the given id
    const foundUser = await users.findById(user.id);

    // Check if the user is valid
    if (!foundUser) {
      return res.status(400).json({ status: 400, error: "Invalid user" });
    }

    // Send the user as a JSON response
    res.status(200).json({ status: 200, user: foundUser });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ status: 401, error: "Invalid token" });
    }
    res.status(401).json({ status: 401, error: "Invalid authtoken" });
  }
};
