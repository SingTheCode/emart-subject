import { RefObject, Suspense, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Loading from "components/atoms/Loading/Loading";
import { ProductProps } from "components/blocks/Product/Product";
import {
  getChangedMenuProductListSelector,
  productListSelector,
  productPageState,
} from "store/product";
import { selectedMenuState } from "store/menu";
import ProductList from "./ProductList";

export interface ProductListProps {
  productList: ProductProps[];
  forwardRef: RefObject<HTMLDivElement>;
}

const ProductListBox = () => {
  const menuChangedPagination = useRecoilValue(
    getChangedMenuProductListSelector
  );
  const pagination = useRecoilValue(productListSelector);
  const [page, setPage] = useRecoilState(productPageState);
  const menu = useRecoilValue(selectedMenuState);
  const [productList, setProductList] = useState<ProductProps[]>([]);

  const preventRef = useRef(true);
  const observeRef = useRef<HTMLDivElement>(null);
  const endRef = useRef(false);

  const obsHandler = (entries: any) => {
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler);
    if (observeRef.current) observer.observe(observeRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (page === 1 && preventRef.current === false) return;
    if (pagination.isLastPage) {
      endRef.current = true;
    }
    setProductList((prev) => [...prev, ...pagination.contents]);
  }, [page]);

  useEffect(() => {
    preventRef.current = true;
  }, [productList]);

  useEffect(() => {
    endRef.current = false;
    setPage(1);
    setProductList(menuChangedPagination.contents);
  }, [menu]);

  return <ProductList productList={productList} forwardRef={observeRef} />;
};

const ProductListContainer = () => (
  <Suspense fallback={<Loading />}>
    <ProductListBox />
  </Suspense>
);

export default ProductListContainer;
