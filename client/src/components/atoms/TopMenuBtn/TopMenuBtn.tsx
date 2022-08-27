import React from "react";

import styles from "./styles";

interface TopMenuBtnProps {
  content: string;
  selected: boolean;
  clickHandler: Function;
}

const TopMenuBtn = ({ content, selected }: TopMenuBtnProps) => (
  <>
    {selected ? (
      <styles.ClickButton>{content}</styles.ClickButton>
    ) : (
      <styles.DefaultButton>{content}</styles.DefaultButton>
    )}
  </>
);

export default TopMenuBtn;
