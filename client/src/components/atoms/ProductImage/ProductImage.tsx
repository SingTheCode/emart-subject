import React from "react";

import styles from "./styles";

export type ImageProps = {
  src: string;
};

const ProductImage = ({ src }: ImageProps) => <styles.Image src={src} />;

export default ProductImage;
