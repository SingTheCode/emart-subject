import React from "react";

import { ProductProps } from ".";
import styles from "./styles";
import ProductImage from "../../atoms/ProductImage/ProductImage";
import Content from "../../atoms/Content/Content";

const Product = ({
  productImgSrc,
  previousPrice,
  price,
  title,
  eventContent,
  discountContent,
  like,
  review,
}: ProductProps) => (
  <>
    <styles.ProductBox>
      <ProductImage src={productImgSrc} />
      <styles.BoxInfo>
        {previousPrice && (
          <styles.PreviousPrice>{previousPrice}</styles.PreviousPrice>
        )}
        {price && <styles.Price>{price}</styles.Price>}
        <styles.Title>{title}</styles.Title>
        <styles.ProductBadge>
          {eventContent &&
            eventContent.map((content) => (
              <Content content={content} type="event" />
            ))}
          {discountContent &&
            discountContent.map((content) => (
              <Content content={content} type="discount" />
            ))}
        </styles.ProductBadge>
        <styles.FavoriteBox>
          <styles.Box>
            <styles.LikeImg />
            <styles.Count>{like}</styles.Count>
          </styles.Box>
          <styles.Box>
            <styles.LikeImg />
            <styles.Count>{review}</styles.Count>
          </styles.Box>
        </styles.FavoriteBox>
      </styles.BoxInfo>
    </styles.ProductBox>
  </>
);

export default Product;
