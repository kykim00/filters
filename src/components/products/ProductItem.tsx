import styled from "@emotion/styled";
import { Product } from "../../types";

const ProductItem = ({
  name,
  image,
  brand,
  sales_price,
  original_price,
}: Product) => {
  const onErrorImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "noImage.svg";
  };
  return (
    <div>
      <Image src={image} alt={name} onError={onErrorImage} />
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
  aspect-ratio: 1;
`;
export default ProductItem;
