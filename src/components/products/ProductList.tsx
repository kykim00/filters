import styled from "@emotion/styled";
import { Product } from "../../types";
import ProductItem from "./ProductItem";

const ProductList = ({ list }: { list: Product[] }) => {
  return (
    <ProductListContainer>
      {list.map((item) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
export default ProductList;
