import React, { useMemo } from "react";
import { ProductType } from "../utils/_types";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  console.log(product);
  const component = useMemo(
    () => (
      <div className="my-10 overflow-hidden bg-white rounded-lg w-72">
        <div className="m-2">
          <img
            src={product?.p_image}
            alt={product?.p_name}
            className="object-cover rounded-md shadow-md h-60"
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
            {product?.p_description.short}
          </p>
        </div>
        <div className="flex items-center justify-between mx-4 mt-2">
          <span className="px-1 font-medium text-white bg-red-500 rounded-sm">
            Price
          </span>
          <div className="flex items-center">
            <div className="text-lg font-semibold text-black">
              {product?.p_price} ₹
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center m-2 shadow-lg ">
          <button
            type="button"
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
