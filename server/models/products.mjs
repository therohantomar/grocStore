import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define Product Schema
const productSchema = new Schema({
  p_id: {
    type: String,
    default: function () {
      // Generating auto-incremented ID using Mongoose built-in _id
      return this._id.toHexString();
    },
    unique: true,
  },
  p_name: {
    type: String,
    required: true,
  },
  p_price: {
    type: Number,
    required: true,
  },
  p_category: {
    type: String,
    required: true,
  },
  p_image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Products", productSchema);
export default Product;
