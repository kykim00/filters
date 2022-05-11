import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Filters from "../components/filters";
import ProductList from "../components/products/ProductList";
import { getProductList } from "../utils/api";
import { paramState } from "../atoms";
import styled from "@emotion/styled";

const MainPage = () => {
  const params = useRecoilValue(paramState);
  const setParams = useSetRecoilState(paramState);
  const { data } = useQuery(["products", params], () => getProductList(params));

  if (!data) return <div>Loading...</div>;
  const currentPage = params.page || 1;
  const pageStep = Math.floor((currentPage - 1) / 10) * 10;
  const lastPage = Math.ceil(data.total / 20);

  const isLastGroup = Math.ceil(currentPage / 10) === Math.ceil(lastPage / 10);
  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setParams({
      ...params,
      page: +e.currentTarget.textContent!,
    });
  };
  const handleGoToLastPage = () => {
    setParams({
      ...params,
      page: lastPage,
    });
  };

  const handleGoToFirstPage = () => {
    setParams({
      ...params,
      page: 1,
    });
  };

  const handleGoToPrevPage = () => {
    setParams({
      ...params,
      page: currentPage - 1 || 1,
    });
  };
  const handleGoToNextPage = () => {
    if (currentPage === lastPage) return;
    setParams({
      ...params,
      page: currentPage + 1,
    });
  };
  console.log(currentPage, lastPage, isLastGroup);
  return (
    <div>
      <h1>Products</h1>
      <Filters />
      <ProductList list={data.products} />
      <PageContainer>
        <li>
          <button onClick={handleGoToFirstPage}>{`<<`}</button>
        </li>
        <li>
          <button onClick={handleGoToPrevPage}>{`<`}</button>
        </li>
        {new Array(
          isLastGroup ? lastPage - Math.floor(currentPage / 10) * 10 : 10
        )
          .fill("")
          .map((item, index) => (
            <li key={index}>
              <PageButton
                onClick={handlePageChange}
                isCurrentPage={index + 1 + pageStep === currentPage}
              >
                {index + 1 + pageStep}
              </PageButton>
            </li>
          ))}
        <li>
          <button onClick={handleGoToNextPage}>{`>`}</button>
        </li>
        <li>
          <button onClick={handleGoToLastPage}>{`>>`}</button>
        </li>
      </PageContainer>
    </div>
  );
};

const PageContainer = styled.ul`
  display: flex;
`;
const PageButton = styled.button<{ isCurrentPage: boolean }>`
  color: ${(props) => (props.isCurrentPage ? "red" : "black")};
`;
export default MainPage;
