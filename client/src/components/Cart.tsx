import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../utils/store/store";
import {
  ProductInBasket,
  removeProductFromBasket,
  decrementProductFromBasket,
  addProductToBasket,
} from "../utils/store/basketSlice";
import { Link } from "react-router-dom";
import useGeoAddress from "../utils/hooks/useGeoAddress";
import { GeoAddress } from "../utils/hooks/useGeoAddress";
import { useStripe } from "../utils/hooks/useStripe";

const Cart = (): JSX.Element => {
  const { address }: { address:GeoAddress}  = useGeoAddress();

  const dispatch = useDispatch<AppDispatch>();
  const products: ProductInBasket[] = useSelector(
    (state: RootState) => state.basket.baskets
  );
  const handlePayment = useStripe(products);
  const { user } = useSelector((state: RootState) => state.user);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen mt-8 text-center text-gray-600">
        <p className="mb-6 font-bold text-center text-blue-600 lg:text-xl text-md">
          No products in your cart, kindly shop now
        </p>
        <div className="w-24 mx-auto mb-4 border-b-2 border-blue-600"></div>

        <Link to={"/"}>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  const handlePayments = () => {
    if (address?.city?.toLowerCase() !== "mumbai") {
      alert(
        "Sorry we are not delivering outside Mumbai, kindly shop from Mumbai"
      );
      return;
    }
    handlePayment();
  };

  return (
    <div className="flex flex-col w-full mt-20 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 mx-4 md:w-[80%]">
        {products.map((product) => (
          <div
            key={product.p_id}
            className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md shadow-sm md:flex md:flex-row md:justify-between"
          >
            {product.p_image && (
              <img
                src={product.p_image}
                alt={product.p_name}
                className="w-full h-40 px-6 border-2 rounded-md lg:w-44 lg:px-4"
              />
            )}
            <div className="flex flex-col w-full gap-2 p-4 border-2">
              <h2 className="text-lg font-semibold">{product.p_name}</h2>
              <span className="text-gray-600">
                Quantity: {product.quantity}
              </span>
              <span className="text-gray-600">
                ₹ {(product.p_price * product.quantity).toFixed(2)}
              </span>
              <p className="text-sm text-gray-600">
                {product?.p_description?.short}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch(addProductToBasket({ payload: product }))
                }
                className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch(decrementProductFromBasket(product.p_id))
                }
                className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-300"
              >
                -
              </button>
              <button
                onClick={() => dispatch(removeProductFromBasket(product.p_id))}
                className="px-2 py-1 text-white bg-red-600 rounded-sm hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-md w-full md:w-[20%]">
        <h2 className="mb-4 text-lg font-semibold">Cart Panel</h2>
        <span className="text-gray-600">Total Products: {products.length}</span>
        <div className="mt-4 mb-4 border-b-2 border-gray-300"></div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount:</span>
          <span className="text-gray-600">
            ₹{" "}
            {products
              .reduce((acc, cur) => acc + cur.p_price * cur.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        { address?.city?.toLowerCase() !== "mumbai" ? (
          <p className="text-red-600 text-sm">
            We are not delivering outside Mumbai
          </p>
        ) : user.userName === "" ? (
          <Link to="/login">
            <button className="px-4 py-2 mt-4 text-white bg-green-600 rounded-md">
              Login to checkout
            </button>
          </Link>
        ) : (
          <button
            onClick={() => handlePayments()}
            className="px-4 py-2 mt-4 text-white bg-green-600 rounded-md"
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
