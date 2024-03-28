import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: {
    type: Object,
    default: {
      Authtoken: null,
      RefreshToken: null,
      LoginToken: null,
      reauthToken: null,
    },
  },
});

export default mongoose.model("User", userSchema);
