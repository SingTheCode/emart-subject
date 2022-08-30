import { atom, selector } from "recoil";
import $ from "jquery";

import { selectedMenuState } from "./menu";
import { PaginationResponse } from "utils/interfaces";

const productPageState = atom({
  key: "ProductPageState",
  default: 1,
});

export const productListSelector = selector<PaginationResponse>({
  key: "ProductListSelector",
  get: async ({ get }) => {
    try {
      const response = await $.ajax({
        url: `http://localhost:3001/pagination/?type=${get(
          selectedMenuState
        )}&pageNumber=${get(productPageState)}`,
        type: "get",
        contentType: "application/x-www-form-urlencoded; charset=euc-kr",
        dataType: "json",
        success: (result) => console.log(result),
      });
      return response[0];
    } catch (err) {
      console.log(err);
    }
  },
});

// export const productListSelector = selector({
//   key: "ProductListSelector",
//   get: async ({ get }) => {
//     try {
//       const response = await $.ajax({
//         type: "get",
//         url: `http://localhost:3001/productList/?type=${get(
//           selectedMenuState
//         )}`,
//         dataType: "json",
//       });
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   },
// });
