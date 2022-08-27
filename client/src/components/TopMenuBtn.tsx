import React from "react";
import styled, { css } from "styled-components";

interface TopMenuBtnProps {
  content: string;
  selected: boolean;
  clickHandler: Function;
}

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

const TopMenuBtn = ({ content, selected }: TopMenuBtnProps) => (
  <>
    {selected ? (
      <ClickButton>{content}</ClickButton>
    ) : (
      <DefaultButton>{content}</DefaultButton>
    )}
  </>
);

export default TopMenuBtn;
