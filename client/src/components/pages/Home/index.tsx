import { Suspense } from "react";
import { useRecoilValue } from "recoil";

import { ProductProps } from "components/blocks/Product/Product";
import { productListSelector } from "store/product";
import Home from "./Home";
import Loading from "components/atoms/Loading/Loading";

export interface HomeProps {
  productList: ProductProps[];
}

const HomePage = () => {
  const pagenation = useRecoilValue(productListSelector);

  return <Home productList={pagenation.contents} />;
};

const HomeContainer = () => (
  <Suspense fallback={<Loading />}>
    <HomePage />
  </Suspense>
);

export default HomeContainer;
