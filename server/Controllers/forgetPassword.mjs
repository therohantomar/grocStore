import users from "../models/users.mjs";
import jwt from "jsonwebtoken";
import { connection } from "../Services/connection.mjs";
import { config } from "dotenv";
import nodemailer from "nodemailer";
config();

// Send a re-authentication link to the user's email address

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Establish the database connection
    await connection();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    // Send a re-authentication link to the user's email address

    // Find the user with the given email
    const user = await users.findOne({ userEmail: email });

    // Check if the user is valid
    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Create a new re-authentication token
    const reauthToken = jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // const link = `http://localhost:3000/reauthenticate?userid=${user._id}&reauthToken=${user.reauthToken}`;
    const mailOptions = {
      from: process.env.GMAIL_USERNAME,
      to: email,
      subject: "Reset password",
      text: `Please click on the following link to reset your password:`,
    };

    await transporter.sendMail(mailOptions);
    // Update the re-authentication token for the user
    await users.findByIdAndUpdate(user._id, {
      tokens: {
        reauthToken,
      },
    });

    // Send a success response
    res.json({ message: "Reset password link sent" });
  } catch (error) {
    console.error("Error forget password:", error);
    // Send an error response if something went wrong
    res.status(500).json({ error: "Failed to reset password" });
  }
};
