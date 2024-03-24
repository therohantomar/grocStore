import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define Product Schema
const productSchema = new Schema({
  p_id: {
    type: String,
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

const Product = mongoose.model("product", productSchema);
export default Product;
