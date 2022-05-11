import { useQuery } from "react-query";
import { getBrandList } from "../../utils/api";
import FilterItemList from "./FilterItemList";

const BrandFilter = () => {
  const { data } = useQuery("brands", () => getBrandList());
  if (!data) return null;
  return (
    <div>
      <p>Brand</p>
      <FilterItemList list={data} filterName="brand" />
    </div>
  );
};

export default BrandFilter;
