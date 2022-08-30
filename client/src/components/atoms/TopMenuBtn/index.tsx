import { MouseEventHandler } from "react";

import TopMenuBtn from "./TopMenuBtn";

export interface TopMenuBtnProps {
  content?: string;
  selected?: boolean;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

const TopMenuBtnContainer = ({
  content,
  selected,
  clickHandler,
}: TopMenuBtnProps) => (
  <TopMenuBtn
    content={content}
    selected={selected}
    clickHandler={clickHandler}
  />
);

export default TopMenuBtnContainer;
