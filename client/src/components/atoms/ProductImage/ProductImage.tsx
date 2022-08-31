import styles from "./styles";
import { ImageProps } from "utils/interfaces";

const ProductImage = ({ src }: ImageProps) => (
  <styles.ImageBox>
    <styles.Image src={src} />
  </styles.ImageBox>
);

export default ProductImage;
