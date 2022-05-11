import { Product } from "../../types";

const ProductItem = ({
  name,
  image,
  brand,
  sales_price,
  original_price,
}: Product) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{brand}</p>
      <p>{sales_price}</p>
    </div>
  );
};

export default ProductItem;
