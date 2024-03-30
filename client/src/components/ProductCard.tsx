import React, { useMemo } from "react";
import { ProductType } from "../utils/_types";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const component = useMemo(
    () => (
      <div className="max-w-sm mx-auto my-10 overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="relative">
          <img
            src={product?.p_image}
            alt={product?.p_name}
            className="object-cover w-full h-56 rounded-t-lg md:h-64"
            width={500}
            height={300}
          />
          <div className="absolute inset-x-0 bottom-0 px-4 py-2">
            <h1 className="text-2xl font-semibold tracking-tighter">
              {product?.p_name}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200">
          <div className="flex items-center">
            <div className="text-lg font-semibold text-gray-700">
              ${product?.p_price}
            </div>
            <div className="ml-3 text-sm font-semibold text-gray-500 line-through">
              ${product?.p_originalPrice}
            </div>
          </div>
          <button
            type="button"
            className="w-32 h-10 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
