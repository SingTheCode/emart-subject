import React from "react";

import { TopMenuBarProps } from ".";
import TopMenuBtn from "../../atoms/TopMenuBtn/TopMenuBtn";
import styles from "./styles";

const TopMenuBar = ({
  menuList,
  selectedMenu,
  clickHandler,
  scrollType,
}: TopMenuBarProps) => {
  return (
    <styles.MenuBar scrollType={scrollType}>
      {menuList!.map((menu, idx) => (
        <TopMenuBtn
          key={idx}
          content={menu}
          selected={selectedMenu === menu}
          clickHandler={clickHandler!}
        />
      ))}
    </styles.MenuBar>
  );
};

export default TopMenuBar;
