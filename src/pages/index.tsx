import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProductList from "../components/products/ProductList";
import { Products, QueryParams } from "../types";
import { getProductList } from "../utils/api";

const MainPage = () => {
  const [params, setParams] = useState<QueryParams>({});

  const { data } = useQuery(["products", params], () => getProductList(params));

  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>Hello World</h1>
      <ProductList list={data.products} />
    </div>
  );
};

export default MainPage;
