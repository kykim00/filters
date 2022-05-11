import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import { Products, QueryParams } from "../types";
import { getProductList } from "../utils/api";

const MainPage = () => {
  const [data, setData] = useState<Products>();
  const [params, setParams] = useState<QueryParams>({});
  const getData = async () => {
    const response = await getProductList(params);
    setData(response);
    return response;
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Hello World</h1>
      <ProductList list={data.products} />
    </div>
  );
};

export default MainPage;
