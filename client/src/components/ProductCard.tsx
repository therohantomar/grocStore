import React, { useMemo } from "react";
import { ProductType } from "../utils/_types";
import {useDispatch} from "react-redux"
import { AppDispatch } from "../utils/store/store";
import { addProductToBasket } from "../utils/store/basketSlice";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const dispatch=useDispatch<AppDispatch>()

  const component = useMemo(
    () => (
      <div className=" overflow-hidden bg-white rounded-lg w-72">
        <div className="m-2">
          <img
            src={product?.p_image}
            alt={product?.p_name}
            className="object-cover rounded-md shadow-md h-40"
            width={500}
            height={300}
          />
        </div>
        <div className="m-2 text-center">
          <h1 className="text-xl font-semibold tracking-tighter capitalize">
            {product?.p_name}
          </h1>
        </div>
        <div className="h-24 -mt-2">
          <p className="px-2 text-sm text-gray-400">
            {product?.p_description.short || product.p_description.storage_tips}
          </p>
        </div>
        <div className="flex items-center w-max justify-center mx-auto px-2 text-white bg-red-600  mt-2">
          <h4 className="px-2  font-semibold  rounded-sm">
            Price:
          </h4>
          
            <h4 className="text-lg font-semibold ">
            ₹ {product?.p_price} 
            </h4>
  
        </div>

        <div className="flex items-center justify-center m-2 shadow-lg ">
          <button
            type="button"
            onClick={() => dispatch(addProductToBasket({payload:product}))}
            className="w-full h-10 px-4 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    ),
    [product]
  );

  return component;
};

export default ProductCard;
