import { useGetProducts } from "../utils/hooks/useGetProducts";
import { ProductType } from "../utils/_types";
import ProductCard from "./ProductCard";

const Home = () => {
  const {
    loading,
    error,
    Products,
  }: { loading: boolean; error: boolean; Products: ProductType[] } =
    useGetProducts();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (Products.length === 0) return <h1>No products found</h1>;

  return (
    <section className="flex flex-col gap-8 ">
      <div className="flex flex-wrap items-center justify-start w-11/12 gap-6 mx-auto ">
        {Products.map((product) => (
          <ProductCard key={product.p_id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
