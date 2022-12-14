import Product from "components/blocks/Product/Product";
import { ProductListProps } from ".";
import styles from "./styles";

const ProductList = ({ productList, forwardRef }: ProductListProps) => {
  return (
    <>
      <styles.ProductList>
        {productList.map(
          (
            {
              productImgSrc,
              previousPrice,
              price,
              title,
              eventContent,
              discountContent,
              like,
              review,
            },
            idx
          ) => {
            if (idx === productList.length - 1) {
              return (
                <Product
                  key={idx}
                  productImgSrc={productImgSrc}
                  previousPrice={previousPrice}
                  price={price}
                  title={title}
                  eventContent={eventContent}
                  discountContent={discountContent}
                  like={like}
                  review={review}
                  forwardRef={forwardRef}
                />
              );
            }
            return (
              <Product
                key={idx}
                productImgSrc={productImgSrc}
                previousPrice={previousPrice}
                price={price}
                title={title}
                eventContent={eventContent}
                discountContent={discountContent}
                like={like}
                review={review}
              />
            );
          }
        )}
      </styles.ProductList>
    </>
  );
};

export default ProductList;
