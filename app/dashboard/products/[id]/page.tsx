import { fetchProductById } from "@/api/products";
import ProductListItem from "../ProductListItem";

interface Product {
  id: string;
}

const ProductPage = async ({ params }: { params: Product }) => {
  const product = await fetchProductById(Number(params.id));
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <ProductListItem product={product} />
    </div> 
  );
};

export default ProductPage;
