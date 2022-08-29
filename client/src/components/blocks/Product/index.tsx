import { useRecoilValue } from "recoil";

import { selectedMenuState } from "store/menu";
import Product from "./Product";

export type ProductProps = {
  type?: string;
  productImgSrc: string;
  previousPrice?: string;
  price?: string;
  title: string;
  eventContent?: string[];
  discountContent?: string[];
  like: number;
  review?: number;
};

const ProductContainer = ({
  type,
  productImgSrc,
  previousPrice,
  price,
  title,
  eventContent,
  discountContent,
  like,
  review,
}: ProductProps) => {
  const selectMenu = useRecoilValue(selectedMenuState);

  return (
    <>
      {(type === selectMenu || type === "전체") && (
        <Product
          productImgSrc={productImgSrc}
          previousPrice={previousPrice}
          price={price}
          title={title}
          eventContent={eventContent}
          discountContent={discountContent}
          like={like}
          review={review}
        />
      )}
    </>
  );
};

export default ProductContainer;
