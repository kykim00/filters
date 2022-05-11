import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import Filters from "../components/filters";
import ProductList from "../components/products/ProductList";
import { getProductList } from "../utils/api";
import { paramState } from "../atoms";

const MainPage = () => {
  const params = useRecoilValue(paramState);

  const { data } = useQuery(["products", params], () => getProductList(params));

  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>Hello World</h1>
      <Filters />
      <ProductList list={data.products} />
    </div>
  );
};

export default MainPage;
