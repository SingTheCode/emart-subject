import styled from "styled-components";

import { ImageProps } from "./ProductImage";

const Image = styled.img<ImageProps>`
  width: 120px;
  border-radius: 10px;
`;

export default {
  Image,
};
