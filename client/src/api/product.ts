import $ from "jquery";

import { MenuList } from "utils/types";

export const getProductList = async (type: MenuList, pageNumber: number) => {
  const response = await $.ajax({
    url: `${process.env.REACT_APP_API}/product/list?type=${type}&pageNumber=${pageNumber}`,
    type: "get",
    contentType: "application/x-www-form-urlencoded; charset=euc-kr",
    dataType: "json",
    success: (data) => console.log(data),
  });

  return response[0];
};
