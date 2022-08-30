import * as menuHandlers from "mocks/handlers/menu";
import * as productHandlers from "mocks/handlers/product";

export const handlers = [
  ...Object.values(menuHandlers),
  ...Object.values(productHandlers),
];
