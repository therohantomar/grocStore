import { useGetProducts } from "../utils/hooks/useGetProducts";
import { ProductType } from "../utils/_types";
import ProductCard from "./ProductCard";
import { ProductShimmer } from "./productShimmer";

const Home = () => {
  const {
    loading,
    error,
    Products,
  }: { loading: boolean; error: boolean; Products: ProductType[] } =
    useGetProducts();

  if (loading)
    return (
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex gap-4 items-center justify-center flex-wrap w-11/12 ">
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
    <section className="flex flex-col mt-14 gap-2 lg:gap-8  ">
      <div className="flex flex-wrap items-center justify-center mt-10 w-11/12  gap-4 lg:gap-6 mx-auto ">
        {Products.map((product) => (
          <ProductCard key={product.p_id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
