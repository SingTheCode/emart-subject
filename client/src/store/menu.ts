import { atom, selector } from "recoil";
import $ from "jquery";

export const selectedMenuState = atom({
  key: "SelectedMenuState",
  default: "",
});

export const menuListSelector = selector({
  key: "MenuListSelector",
  get: async ({ get }) => {
    try {
      const response = await $.ajax({
        type: "get",
        url: "../../api/menu.json",
        dataType: "json",
      });
      alert(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});
