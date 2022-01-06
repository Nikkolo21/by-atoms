import { Selector } from "reselect";

export type ProductsReducerState = {
  list: any[];
  selectedType: string | null;
};

export type RootReducer = {
  products: ProductsReducerState;
};

export type StoreSelector<R> = Selector<RootReducer, R>;
