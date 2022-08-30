import ProductImage from "components/atoms/ProductImage/ProductImage";
import Content from "components/atoms/Content/Content";
import styles from "./styles";

export interface ProductProps {
  productImgSrc: string;
  previousPrice?: string;
  price?: string;
  title: string;
  eventContent?: string[];
  discountContent?: string[];
  like: number;
  review?: number;
}

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
            eventContent.map((content, idx) => (
              <Content key={idx} content={content} type="event" />
            ))}
        </styles.ContentBox>
        <styles.ContentBox>
          {discountContent &&
            discountContent.map((content, idx) => (
              <Content key={idx} content={content} type="discount" />
            ))}
        </styles.ContentBox>
      </styles.ProductBadge>
      <styles.FavoriteBox>
        <styles.Box>
          <styles.FavoriteImg src="assets/like.svg" />
          <styles.Count>{like}</styles.Count>
        </styles.Box>
        <styles.Box>
          <styles.FavoriteImg src="assets/talkBalloon.svg" />
          <styles.Count>{review}</styles.Count>
        </styles.Box>
      </styles.FavoriteBox>
    </styles.BoxInfo>
  </styles.ProductBox>
);

export default Product;
