import { createSelector } from "reselect";
import { ProductsReducerState, StoreSelector } from "../types";

export const productSelector: StoreSelector<ProductsReducerState> = (state) =>
  state.products;
export const currentProductType = createSelector(
  productSelector,
  (state) => state.selectedType
);
