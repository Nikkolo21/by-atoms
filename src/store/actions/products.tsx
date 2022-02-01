/** @format */

export const GET_PRODUCTS = 'products/GET_LIST';
export const SELECT_TYPE = 'products/SELECT_TYPE';

const selectType = (type: string) => {
	return {
		type: SELECT_TYPE,
		payload: type,
	};
};

export { selectType };
