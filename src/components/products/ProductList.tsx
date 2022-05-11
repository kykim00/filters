import { Product } from "../../types";
import ProductItem from "./ProductItem";

const ProductList = ({ list }: { list: Product[] }) => {
  return (
    <div>
      {list.map((item) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
