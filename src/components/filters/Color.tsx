import { useQuery } from "react-query";
import { getColorList } from "../../utils/api";
import useFilter from "../../hooks/useFilter";
import FilterItemList from "./FilterItemList";

const ColorFilter = () => {
  const { data } = useQuery("colors", () => getColorList());

  const { selectedFilter, onClickFilterMenu } = useFilter();

  if (!data) return null;
  return (
    <div>
      <h3>
        <button onClick={onClickFilterMenu}>Color</button>
      </h3>
      {selectedFilter === "Color" && (
        <FilterItemList list={data} filterName="color" />
      )}
    </div>
  );
};

export default ColorFilter;
