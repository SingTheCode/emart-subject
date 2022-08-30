import styled, { css } from "styled-components";

import { TopMenuBarProps } from ".";

const scrollDown = css`
  display: none;
`;

const scrollUp = css`
  position: fixed;
  top: 0px;
  z-index: 999;
`;

const MenuBar = styled.div<TopMenuBarProps>`
  ${(props) => {
    if (props.scrollType === "scrollDown") return scrollDown;
    if (props.scrollType === "scrollUp") return scrollUp;
    if (props.scrollType === "") return;
  }}
  border-bottom: 1px solid #f3f3f3;
  background-color: white;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default {
  MenuBar,
};
