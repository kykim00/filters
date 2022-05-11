import { useQuery } from "react-query";
import { getBrandList } from "../../utils/api";
import useFilter from "../../hooks/useFilter";
import FilterItemList from "./FilterItemList";

const BrandFilter = () => {
  const { data } = useQuery("brands", () => getBrandList());

  const { selectedFilter, onClickFilterMenu } = useFilter();
  if (!data) return null;
  return (
    <div>
      <h3>
        <button onClick={onClickFilterMenu}>Brand</button>
      </h3>
      {selectedFilter === "Brand" && (
        <FilterItemList list={data} filterName="brand" />
      )}
    </div>
  );
};

export default BrandFilter;
