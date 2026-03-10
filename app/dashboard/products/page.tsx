import { listProducts } from "@/api/products";
import ProductListItem from "./ProductListItem";

const ProductsPage = async () => {
  listProducts().then(console.log);

  const products = await listProducts();

  return (
    <div className="flex flex-wrap max-w-[1400px] mx-auto w-full gap-4">
      {products.map((product: any) => <ProductListItem product={product} />)}
    </div>
  );
};

export default ProductsPage;
