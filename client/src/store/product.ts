import { selector } from "recoil";
import $ from "jquery";

import { selectedMenuState } from "./menu";

export const productListSelector = selector({
  key: "ProductListSelector",
  get: async ({ get }) => {
    try {
      const response = await $.ajax({
        type: "get",
        url: `http://localhost:3001/productList/?type=${get(
          selectedMenuState
        )}`,
        dataType: "json",
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});
