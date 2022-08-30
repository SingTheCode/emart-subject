import { ProductProps } from "components/blocks/Product/Product";
import { MenuList } from "./types";

export interface ImageProps {
  src: string;
}

export interface menuList {
  menuList: MenuList[];
}

export interface PaginationResponse {
  contents: ProductProps[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}