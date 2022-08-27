import React from "react";
import styled, { css } from "styled-components";

import { ContentState } from "../types/unions";

type ContentProps = {
  content?: string;
  type: ContentState;
};

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
