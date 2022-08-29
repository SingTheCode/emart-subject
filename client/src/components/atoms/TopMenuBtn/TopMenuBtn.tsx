import React, { MouseEventHandler } from "react";

import { TopMenuBtnProps } from ".";
import styles from "./styles";

const TopMenuBtn = ({ content, selected, clickHandler }: TopMenuBtnProps) => (
  <>
    {selected ? (
      <styles.ClickedButton onClick={clickHandler}>
        {content}
      </styles.ClickedButton>
    ) : (
      <styles.UnClickedButton onClick={clickHandler}>
        {content}
      </styles.UnClickedButton>
    )}
  </>
);

export default TopMenuBtn;
