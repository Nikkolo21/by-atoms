/** @format */

import { GET_PRODUCTS, SELECT_TYPE } from '../actions/products';
import { ProductsReducerState } from '../types';

const initialState: ProductsReducerState = {
	list: [],
	selectedType: 'all',
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
			};
		case SELECT_TYPE:
			return {
				...state,
				selectedType: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
