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
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
