import styled from "styled-components";

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding-left: 20px;
`;

const PreviousPrice = styled.div`
  padding-bottom: 2px;
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
  padding-top: 5px;
`;

const FavoriteBox = styled.div`
  display: flex;
  padding-top: 5px;
`;

const Box = styled.div`
  width: 50px;
  padding-right: 20px;
`;

const LikeImg = styled.img`
  width: 17px;
  height: 14px;
  padding-right: 4px;
  content: url();
`;

const TalkBallonImg = styled.img`
  padding-right: 4px;
  content: url(api/images/talkBallon.svg);
`;

const Count = styled.span`
  color: #767676;
  font-size: 0.8rem;
`;

export default {
  ProductBox,
  BoxInfo,
  PreviousPrice,
  Price,
  Title,
  ProductBadge,
  FavoriteBox,
  Box,
  LikeImg,
  TalkBallonImg,
  Count,
};
