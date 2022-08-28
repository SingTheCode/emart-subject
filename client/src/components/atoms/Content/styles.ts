import styled, { css } from "styled-components";

const defaultContent = css`
  width: max-content;
  padding: 0 4px;
  margin: 0 3px 2px 0;
  border-radius: 3px;
  font-size: 0.688rem;
  white-space: nowrap;
`;

const EventContent = styled.span`
  ${defaultContent}
  border: 1px solid #4774cf;
  color: #4774cf;
`;

const DiscountContent = styled.span`
  ${defaultContent}
  border: 1px solid #db392e;
  color: #db392e;
`;

export default {
  EventContent,
  DiscountContent,
};
