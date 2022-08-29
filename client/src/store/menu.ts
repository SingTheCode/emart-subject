import { atom, selector } from "recoil";
import $ from "jquery";

export const selectedMenuState = atom({
  key: "SelectedMenuState",
  default: "전체",
});

export const menuListSelector = selector({
  key: "menuListSelector",
  get: async ({ get }) => {
    try {
      const response = await $.ajax({
        type: "get",
        url: "http://localhost:3001/menuList",
        dataType: "json",
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});
