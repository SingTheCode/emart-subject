import { ProductProps } from "components/blocks/Product/Product";

export interface ImageProps {
  src: string;
}

export interface menuList {
  menuList: [string];
}

export interface PaginationResponse {
  contents: ProductProps[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}
