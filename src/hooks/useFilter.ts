import { useRecoilValue, useSetRecoilState } from "recoil";
import { paramState, selectedFilterState } from "../atoms";

const useFilter = () => {
  const params = useRecoilValue(paramState);
  const setParams = useSetRecoilState(paramState);

  const selectedFilter = useRecoilValue(selectedFilterState);
  const setSelectedFilter = useSetRecoilState(selectedFilterState);

  const onClickResetFilter = () => {
    setSelectedFilter("");
    setParams({});
  };

  const onClickFilterMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setSelectedFilter(e.currentTarget.textContent!);
  };

  return {
    params,
    setParams,
    selectedFilter,
    setSelectedFilter,
    onClickResetFilter,
    onClickFilterMenu,
  };
};

export default useFilter;
