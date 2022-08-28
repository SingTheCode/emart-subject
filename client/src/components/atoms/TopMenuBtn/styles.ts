import React from "react";
import styled, { css } from "styled-components";

const defaultButton = css`
  padding: 0 0 7px;
  margin: 0 20px 0 0;
  border-style: none;
  background-color: white;
  font-size: 0.875rem;
`;

const UnClickedButton = styled.button`
  ${defaultButton}
  color: #767676;
`;

const ClickedButton = styled.button`
  ${defaultButton}
  border-bottom: 2px solid black;
  font-weight: bold;
`;

export default {
  UnClickedButton,
  ClickedButton,
};
