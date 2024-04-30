import { useGetProducts } from "../utils/hooks/useGetProducts";
import { ProductType } from "../utils/_types";
import ProductCard from "./ProductCard";
import { ProductShimmer } from "./productShimmer";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store/store";
const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);
  console.log(user);
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
        {user !== "" ? (
          <h4 className="text-3xl font-semibold text-center text-gray-800">
            Welcome,
            <span className="text-blue-600"> {user} </span>
            let's start shopping
          </h4>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center w-11/12 gap-4 mx-auto mt-10 lg:gap-6 ">
        {Products.map((product) => (
          <ProductCard key={product.p_id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
