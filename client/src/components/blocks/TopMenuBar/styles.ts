import styled from "styled-components";

const MenuBar = styled.div`
  border-bottom: 1px solid #f3f3f3;
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
