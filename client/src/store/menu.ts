import { MenuList } from "utils/types";
import { atom, selector } from "recoil";
import $ from "jquery";

export const selectedMenuState = atom<MenuList>({
  key: "SelectedMenuState",
  default: "전체",
});

export const menuListSelector = selector({
  key: "menuListSelector",
  get: async ({ get }) => {
    try {
      const response = await $.ajax({
        type: "get",
        url: `${process.env.REACT_APP_API}/menu/list`,
        dataType: "json",
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});
