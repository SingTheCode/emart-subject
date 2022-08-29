import React, { MouseEventHandler } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { menuListSelector, selectedMenuState } from "store/menu";
import TopMenuBar from "./TopMenuBar";

export interface TopMenuBarProps {
  menuList: string[];
  selectedMenu: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

const TopMenuBarContainer = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);
  const menuList = useRecoilValue(menuListSelector);

  const menuClickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    alert(target.value);
    setSelectedMenu(target.value);
  };

  return (
    <TopMenuBar
      menuList={menuList}
      selectedMenu={selectedMenu}
      clickHandler={menuClickHandler}
    />
  );
};

export default TopMenuBarContainer;
