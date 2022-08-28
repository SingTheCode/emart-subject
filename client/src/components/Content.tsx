import React from "react";
import styled, { css } from "styled-components";

import { ContentState } from "../types/unions";

type ContentProps = {
  content?: string;
  type: ContentState;
};

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

const Content = ({ content, type }: ContentProps) => (
  <>
    {type === "event" ? (
      <EventContent>{content}</EventContent>
    ) : (
      <DiscountContent>{content}</DiscountContent>
    )}
  </>
);

export default Content;
