import { useGetProducts } from "../utils/hooks/useGetProducts";
import { useEffect } from "react";
import { ProductType } from "../utils/_types";
import ProductCard from "./ProductCard";
import { ProductShimmer } from "./productShimmer";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store/store";
const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const authtoken = localStorage.getItem("Authtoken");
  useEffect(() => {
    console.log(authtoken);
    if (authtoken) {
      fetch(`https://groc-store.vercel.app/users/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        },
        body: JSON.stringify({ authtoken }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.valid) {
            localStorage.removeItem("authtoken");
          }
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const {
    loading,
    error,
    Products,
  }: { loading: boolean; error: boolean; Products: ProductType[] } =
    useGetProducts();

  if (loading)
    return (
      <div className="flex items-center justify-center w-full mt-10">
        <div className="flex flex-wrap items-center justify-center w-11/12 gap-4 ">
          {Array(20)
            .fill(0)
            .map((index) => (
              <ProductShimmer key={index} />
            ))}
        </div>
      </div>
    );

  if (error) return <h1>Error</h1>;
  if (Products.length === 0) return <h1>No products found</h1>;

  return (
    <section className="flex flex-col gap-2 mt-14 lg:gap-8 ">
      <div className="flex items-center justify-center">
        {user.userName !== "" ? (
          <h4
            className="flex flex-wrap text-xl font-extrabold leading-none text-center text-gray-800 sm:text-xl md:text-2xl sm:tracking-tight md:tracking-tighter"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <span className="block">Welcome,</span>
            <span className="block text-blue-600">{user.userName}</span>
            <span className="block">let's start shopping</span>
          </h4>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center w-11/12 gap-4 mx-auto mt-4 lg:gap-6 ">
        {Products.map((product) => (
          <ProductCard key={product.p_id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
