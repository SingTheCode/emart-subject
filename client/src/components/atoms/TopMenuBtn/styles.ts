import styled, { css } from "styled-components";

const defaultButton = css`
  padding: 6px 0;
  margin: 0 6px;
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
  border-bottom: 2px solid;
  font-weight: 700;
`;

export default {
  UnClickedButton,
  ClickedButton,
};
