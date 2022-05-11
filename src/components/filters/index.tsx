import styled from "@emotion/styled";
import useFilter from "../../hooks/useFilter";
import BrandFilter from "./Brand";
import CategoryFilter from "./Category";
import ColorFilter from "./Color";
import PriceFilter from "./Price";

const Filters = () => {
  const { onClickResetFilter } = useFilter();
  return (
    <>
      <h3>
        <button onClick={onClickResetFilter}>Reset</button>
      </h3>
      <FiltersContainer>
        <BrandFilter />
        <ColorFilter />
        <CategoryFilter />
        <PriceFilter />
      </FiltersContainer>
    </>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export default Filters;
