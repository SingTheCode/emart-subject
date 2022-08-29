import { Suspense } from "react";
import { useRecoilValue } from "recoil";

import { productListSelector } from "store/product";
import { ProductProps } from "components/blocks/Product";
import Home from "./Home";

export type HomeProps = {
  productList: ProductProps[];
};

const HomePage = () => {
  const productList = useRecoilValue(productListSelector);
  
  return <Home productList={productList} />;
};

const HomeContainer = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePage />
  </Suspense>
);

export default HomeContainer;
