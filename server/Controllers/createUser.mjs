import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import User from "../models/users.mjs";

export const createUser = async (req, res) => {
  const { userName, userEmail, userAddress } = req.body;

  const user = new User({
    _id: nanoid(),
    userName,
    userEmail,
    userAddress,
    password: await bcrypt.hash(req.body.password, 10),
  });

  try {
    const existingUser = await User.findOne({ userEmail: req.body.userEmail });
    if (existingUser) {
      return res.status(400).json({ status: 400, error: "User exists" });
    } else {
      const savedUser = await user.save();
      return res.status(200).json({ status: 200, ...savedUser });
    }
  } catch (error) {
    res.status(400).json({ status: 401, ...error.message });
  }
};
