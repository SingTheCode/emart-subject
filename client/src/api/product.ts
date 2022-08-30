import $ from "jquery";

import { MenuList } from "utils/types";

export const getProductList = async (type: MenuList, pageNumber: number) => {
  const response = await $.ajax({
    url: `http://localhost:3001/pagination/?type=${type}&pageNumber=${pageNumber}`,
    type: "get",
    contentType: "application/x-www-form-urlencoded; charset=euc-kr",
    dataType: "json",
  });

  return response[0];
};
