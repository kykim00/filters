import BrandFilter from "./Brand";
import CategoryFilter from "./Category";
import ColorFilter from "./Color";
import PriceFilter from "./Price";

const Filters = () => (
  <div>
    <BrandFilter />
    <ColorFilter />
    <CategoryFilter />
    <PriceFilter />
  </div>
);

export default Filters;
