import { getProductList } from "api/product";
import { atom, selector } from "recoil";

import { selectedMenuState } from "./menu";
import { PaginationResponse } from "utils/interfaces";

export const productPageState = atom({
  key: "ProductPageState",
  default: 1,
});

export const getChangedMenuProductListSelector = selector<PaginationResponse>({
  key: "GetChangedMenuProductListSelector",
  get: async ({ get }) => {
    try {
      const response = await getProductList(get(selectedMenuState), 1);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});

export const productListSelector = selector<PaginationResponse>({
  key: "ProductListSelector",
  get: async ({ get }) => {
    try {
      const response = await getProductList(
        get(selectedMenuState),
        get(productPageState)
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
});
