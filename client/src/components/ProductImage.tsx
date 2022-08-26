import React from "react";
import styled from "styled-components";

type ImageProps = {
  src: string;
};

const Image = styled.img<ImageProps>`
  width: 120px;
  border-radius: 10px;
`;

const ProductImage = ({ src }: ImageProps) => <Image src={src} />;

export default ProductImage;
