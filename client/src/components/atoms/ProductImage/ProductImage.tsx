import React from "react";

import styles from "./styles";
import { ImageProps } from "utils/types";

const ProductImage = ({ src }: ImageProps) => (
  <styles.ImageBox>
    <styles.Image src={src} />
  </styles.ImageBox>
);

export default ProductImage;
