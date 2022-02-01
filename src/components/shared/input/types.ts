/** @format */

import { Sizes } from '../types';

export type InputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

export interface InputProps {
	id?: string;
	size?: Sizes;
	placeholder?: string;
	disabled?: boolean;
	onChange?: any;
	onBlur?: any;
	width?: string;
	height?: string;
	padding?: string;
	fontSize?: Sizes;
	type?: InputType;
	value?: string;
	min?: string;
	max?: string;
	checked?: boolean;
	accept?: string;
	src?: string;
	name?: string;
	noBorder?: boolean;
	className?: string;
}
