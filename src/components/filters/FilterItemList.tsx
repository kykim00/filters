import { Brands, Colors } from "../../types";
import useFilter from "../../hooks/useFilter";

interface FilterItemListProps {
  list: Brands | Colors;
  filterName: "brand" | "color";
}

const FilterItemList = ({ list, filterName }: FilterItemListProps) => {
  const { params, setParams, setSelectedFilter } = useFilter();
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setParams({
      ...params,
      [filterName]: e.currentTarget.textContent,
    });
    setSelectedFilter("");
  };
  return (
    <ul>
      {list.map((item) => (
        <li onClick={handleClick} key={item.name}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterItemList;
