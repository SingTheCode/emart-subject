import { Dispatch, Suspense, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import $ from "jquery";

import Loading from "components/atoms/Loading/Loading";
import { ProductProps } from "components/blocks/Product/Product";
import ProductList from "./ProductList";
import { MenuList } from "utils/types";
import { selectedMenuState } from "store/menu";

export interface ProductListProps {
  productList: ProductProps[];
  forwardRef: Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}

const ProductListBox = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const menu = useRecoilValue(selectedMenuState);
  const [page, setPage] = useState(1);
  const [lastIntersectingProduct, setLastIntersectProduct] =
    useState<HTMLDivElement | null>(null);

  const getProductList = async (type: MenuList, pageNumber: number) => {
    try {
      const response = await $.ajax({
        url: `${process.env.REACT_APP_API}/product/list?type=${type}&pageNumber=${pageNumber}`,
        type: "get",
        contentType: "application/x-www-form-urlencoded; charset=euc-kr",
        dataType: "json",
      });
      if (page === 1) {
        setProductList([...response.contents]);
      } else {
        setProductList([...productList, ...response.contents]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    setPage(1);
  }, [menu]);

  useEffect(() => {
    getProductList(menu, page);
  }, [page]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastIntersectingProduct) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastIntersectingProduct);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingProduct]);

  return (
      <ProductList
        productList={productList}
        forwardRef={setLastIntersectProduct}
      />
  );
};

const ProductListContainer = () => (
  <Suspense fallback={<Loading />}>
    <ProductListBox />
  </Suspense>
);

export default ProductListContainer;
