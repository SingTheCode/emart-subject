import styled from "styled-components";

import { ImageProps } from "utils/interfaces";

const ImageBox = styled.div`
  position: relative;
  min-width: 120px;
  max-width: 120px;
  height: 120px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  overflow: hidden;
`;

const Image = styled.img<ImageProps>`
  width: 100%;
  border-radius: 10px;
`;

export default {
  ImageBox,
  Image,
};
