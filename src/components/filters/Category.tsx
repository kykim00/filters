import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Categories } from "../../types";
import { getCategoryList } from "../../utils/api";
import useFilter from "../../hooks/useFilter";

const CategoryFilter = () => {
  const [sortedData, setSortedData] = useState<Categories>([]);
  const { data } = useQuery("categories", () => getCategoryList());

  const {
    params,
    setParams,
    selectedFilter,
    setSelectedFilter,
    onClickFilterMenu,
  } = useFilter();

  const handleFilterItemClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setParams({
      ...params,
      categoryId: +e.currentTarget.id,
    });
    setSelectedFilter("");
  };

  useEffect(() => {
    if (!data) return;
    data.forEach((item) => {
      if (!item.parent_id) item.parent_id = item.id;
    });
    setSortedData(data.sort((a, b) => a.parent_id - b.parent_id));
  }, [data]);

  if (!data) return null;
  return (
    <div>
      <h3>
        <button onClick={onClickFilterMenu}>Category</button>
      </h3>
      {selectedFilter === "Category" && (
        <ul>
          {sortedData.map((item) => (
            <CategoryItem
              key={item.id}
              isParent={item.id < 4}
              id={item.id + ""}
              onClick={handleFilterItemClick}
            >
              {item.name}
            </CategoryItem>
          ))}
        </ul>
      )}
    </div>
  );
};

const CategoryItem = styled.li<{ isParent: boolean }>`
  margin-left: ${(props) => (props.isParent ? "0" : "20px")};
`;
export default CategoryFilter;
