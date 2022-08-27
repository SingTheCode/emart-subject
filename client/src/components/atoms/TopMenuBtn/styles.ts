import styled, { css } from "styled-components";

const defaultButton = css`
  padding: 6px 0;
  margin: 0 6px;
  border-style: none;
  background-color: white;
`;

const DefaultButton = styled.button`
  ${defaultButton}
  color: #6c6c6c;
`;

const ClickButton = styled.button`
  ${defaultButton}
  border-bottom: 2px solid black;
  color: #201f1f;
  font-weight: bold;
`;

export default {
  DefaultButton,
  ClickButton,
};
