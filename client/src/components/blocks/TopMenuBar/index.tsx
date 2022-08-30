import React, { MouseEventHandler, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import _ from "lodash";

import { menuListSelector, selectedMenuState } from "store/menu";
import { MenuList } from "utils/types";
import TopMenuBar from "./TopMenuBar";

export interface TopMenuBarProps {
  menuList?: string[];
  selectedMenu?: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  scrollType: string;
}

const TopMenuBarContainer = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);
  const menuList = useRecoilValue(menuListSelector);
  const [scrollType, setScrollType] = useState("");
  let lastScroll = document.documentElement.scrollTop || 0;

  const menuClickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setSelectedMenu(target.outerText as MenuList);
  };

  const scrollHandler = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (window.scrollY > 132) {
      console.log(scrollTop, lastScroll);
      if (scrollTop > lastScroll) {
        lastScroll = scrollTop;
        setScrollType("scrollDown");
      } else {
        lastScroll = scrollTop;
        setScrollType("scrollUp");
      }
    } else {
      setScrollType("");
    }
  };

  const throttledHandler = _.throttle(scrollHandler, 500);

  useEffect(() => {
    const scrollEventListener = () => {
      window.addEventListener("scroll", throttledHandler);
    };

    scrollEventListener();

    return () => {
      window.removeEventListener("scroll", throttledHandler);
    };
  }, []);

  return (
    <TopMenuBar
      menuList={menuList}
      selectedMenu={selectedMenu}
      clickHandler={menuClickHandler}
      scrollType={scrollType}
    />
  );
};

export default TopMenuBarContainer;
