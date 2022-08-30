import { Suspense } from "react";
import { useRecoilValue } from "recoil";

import { ProductProps } from "components/blocks/Product/Product";
import { productListSelector } from "store/product";
import Home from "./Home";

export interface HomeProps {
  productList: ProductProps[];
}

const HomePage = () => {
  const pagenation = useRecoilValue(productListSelector);

  return <Home productList={pagenation.contents} />;
};

const HomeContainer = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePage />
  </Suspense>
);

export default HomeContainer;
