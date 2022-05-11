import { useRecoilValue, useSetRecoilState } from "recoil";
import { paramState } from "../../atoms";
import { Brands, Colors } from "../../types";

interface FilterItemListProps {
  list: Brands | Colors;
  filterName: "brand" | "color";
}

const FilterItemList = ({ list, filterName }: FilterItemListProps) => {
  const params = useRecoilValue(paramState);
  const setParams = useSetRecoilState(paramState);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setParams({
      ...params,
      [filterName]: e.currentTarget.textContent,
    });
  };
  return (
    <ul>
      {list.map((item) => (
        <li onClick={handleClick}>{item.name}</li>
      ))}
    </ul>
  );
};

export default FilterItemList;
