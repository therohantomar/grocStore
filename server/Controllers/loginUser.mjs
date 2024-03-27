import users from "../models/users.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connection } from "../Services/connection.mjs";
import { config } from "dotenv";
config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Establish the database connection
    await connection();

    // Find the user with the given email
    const user = await users.findOne({ userEmail: email });

    // Check if the user is valid
    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Create a new authentication token
    const authToken = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "4h",
      }
    );

    // Create a new refresh token
    const refreshToken = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Update the tokens for the user
    await users.findByIdAndUpdate(user._id, {
      tokens: {
        Authtoken: authToken,
        RefreshToken: refreshToken,
      },
    });

    // Send the authentication and refresh tokens as a JSON response
    res.json({ Authtoken: authToken, RefreshToken: refreshToken });
  } catch (error) {
    console.error("Error login user:", error);
    // Send an error response if something went wrong
    res.status(500).json({ error: "Failed to login" });
  }
};
