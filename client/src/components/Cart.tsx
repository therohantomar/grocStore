import { useSelector } from "react-redux";
import { RootState } from "../utils/store/store";
import { ProductInBasket } from "../utils/store/basketSlice";
import { Link } from "react-router-dom";


const Cart = (): JSX.Element => {
  const products: ProductInBasket[] = useSelector((state: RootState) => state.basket.baskets);
   
  
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600 mt-8">
        <p className="lg:text-xl text-md font-bold mb-6 text-center  text-blue-600">No products in your cart, kindly shop now</p>
        <div className="mx-auto mb-4 w-24 border-b-2 border-blue-600"></div>
   
        <Link to={"/"}>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            Shop Now
          </button>
        </Link>
      </div>
    )
  }



  return (
    <div className="flex flex-col w-full mt-20 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 mx-4 md:w-[80%]">
        {products.map((product) => (
          <div key={product.p_id} className="flex flex-col gap-4 border border-gray-300 p-4 rounded-md shadow-sm md:flex md:flex-row md:justify-between">
            
              {product.p_image && (
                <img
                  src={product.p_image}
                  alt={product.p_name}
                  className="  w-full lg:w-44 h-40 border-2  px-2 rounded-md"
                />
              )}
            <div className="flex flex-col border-2 p-4 w-full gap-2">
              <h2 className="font-semibold text-lg">{product.p_name}</h2>
              <span className="text-gray-600">Quantity: {product.quantity}</span>
              <span className="text-gray-600">₹ {(product.p_price * product.quantity).toFixed(2)}</span>
              <p className="text-gray-600 text-sm">{product?.p_description?.short}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => console.log("Increment")}
                className="bg-gray-200 px-2 py-1 rounded-sm hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => console.log("Decrement")}
                className="bg-red-600 px-2 py-1 rounded-sm hover:bg-red-700 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-md w-full md:w-[20%]">
        <h2 className="font-semibold text-lg mb-4">Cart Panel</h2>
        <span className="text-gray-600">Total Products: {products.length}</span>
        <div className="mt-4 border-b-2 border-gray-300 mb-4"></div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount:</span>
          <span className="text-gray-600">
            ₹{" "}
            {products.reduce((acc, cur) => acc + cur.p_price * cur.quantity, 0).toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => console.log("Checkout")}
          className="bg-green-600 px-4 py-2 rounded-md text-white mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;


