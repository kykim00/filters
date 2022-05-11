import styled from "@emotion/styled";
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
      <Image src={image} alt={name} />
      <p>{name}</p>
      <p>{brand}</p>
      <p>
        {sales_price}원
        <span>
          {" "}
          할인율{" "}
          {((100 * (original_price - sales_price)) / original_price).toFixed(2)}
          %
        </span>
      </p>
    </div>
  );
};

const Image = styled.img`
  width: 100%;
`;
export default ProductItem;
