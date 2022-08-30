import styled from "styled-components";

import { ImageProps } from "utils/interfaces";

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  float: left;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding-left: 20px;
  font-family: Roboto;
`;
const PriceBox = styled.div`
  display: flex;
  align-items: center;
`;
const PreviousPrice = styled.div`
  padding: 0 4px 2px 0;
  color: #767676;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: line-through;
`;

const Price = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Title = styled.p`
  padding-bottom: 3px;
  margin: 0;
  font-size: 0.875rem;
`;

const ProductBadge = styled.div`
  display: block;
  padding-top: 2px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
`;

const FavoriteBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const Box = styled.div`
  width: 50px;
  padding-right: 20px;
`;

const FavoriteImg = styled.img<ImageProps>`
  position: relative;
  top: 1px;
  width: 16px;
  height: 16px;
  object-fit: cover;
  object-position: 0 3px;
  padding-right: 4px;
`;

const Count = styled.span`
  color: #767676;
  font-size: 0.8rem;
`;

export default {
  ProductBox,
  BoxInfo,
  PriceBox,
  PreviousPrice,
  Price,
  Title,
  ProductBadge,
  ContentBox,
  FavoriteBox,
  Box,
  FavoriteImg,
  Count,
};
