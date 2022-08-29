import React from "react";

import { ProductProps } from ".";
import styles from "./styles";
import ProductImage from "components/atoms/ProductImage/ProductImage";
import Content from "components/atoms/Content/Content";
import Like from "api/images/like.svg";
import TalkBalloon from "api/images/talkBalloon.svg";

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
  <styles.ProductBox>
    <ProductImage src={productImgSrc} />
    <styles.BoxInfo>
      <styles.PriceBox>
        {previousPrice && (
          <styles.PreviousPrice>{previousPrice}</styles.PreviousPrice>
        )}
        {price && <styles.Price>{price}</styles.Price>}
      </styles.PriceBox>
      <styles.Title>{title}</styles.Title>
      <styles.ProductBadge>
        <styles.ContentBox>
          {eventContent &&
            eventContent.map((content) => (
              <Content content={content} type="event" />
            ))}
        </styles.ContentBox>
        <styles.ContentBox>
          {discountContent &&
            discountContent.map((content) => (
              <Content content={content} type="discount" />
            ))}
        </styles.ContentBox>
      </styles.ProductBadge>
      <styles.FavoriteBox>
        <styles.Box>
          <styles.FavoriteImg src={Like} />
          <styles.Count>{like}</styles.Count>
        </styles.Box>
        <styles.Box>
          <styles.FavoriteImg src={TalkBalloon} />
          <styles.Count>{review}</styles.Count>
        </styles.Box>
      </styles.FavoriteBox>
    </styles.BoxInfo>
  </styles.ProductBox>
);

export default Product;
