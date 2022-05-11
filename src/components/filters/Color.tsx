import { useQuery } from "react-query";
import { getColorList } from "../../utils/api";
import FilterItemList from "./FilterItemList";

const ColorFilter = () => {
  const { data } = useQuery("colors", () => getColorList());
  if (!data) return null;
  return (
    <div>
      <p>Color</p>
      <FilterItemList list={data} filterName="color" />
    </div>
  );
};

export default ColorFilter;
