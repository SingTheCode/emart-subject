import styled from "styled-components";

import { ImageProps } from "utils/interfaces";

const NavBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3.625rem;
  z-index: -1;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CenterTitle = styled.div`
  transform: translateX(-15%);
`;

const IconImg = styled.img<ImageProps>`
  width: 30px;
  height: 30px;
  object-fit: cover;
  object-position: 0 1px;
`;

export default {
  NavBar,
  LeftHeader,
  CenterTitle,
  IconImg,
};
