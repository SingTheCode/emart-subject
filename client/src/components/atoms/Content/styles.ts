import styled, { css } from "styled-components";

const defaultContent = css`
  width: max-content;
  padding: 2px;
  border-radius: 3px;
  font-size: smaller;
`;

const EventContent = styled.p`
  ${defaultContent}
  border: 1px solid #3e6ac7;
  color: #3e6ac7;
`;

const DiscountContent = styled.p`
  ${defaultContent}
  border: 1px solid #d6322a;
  color: #d6322a;
`;

export default {
  EventContent,
  DiscountContent,
};
