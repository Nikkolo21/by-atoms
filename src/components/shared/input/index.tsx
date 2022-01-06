/** @format */

import React from 'react';
import { Sizes, SIZES } from '../types';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
	size = SIZES.MD,
	placeholder = 'Insert element',
	id,
	disabled,
	onChange,
	width,
	height,
	padding,
	fontSize = SIZES.NORMAL,
	type,
	value,
	checked,
	min,
	max,
	accept,
	src,
	noBorder,
}) => {
	const setInputSize = (size: Sizes, fontSize: Sizes) => {
		switch (size) {
			case SIZES.XL:
				return `px-10 py-3 text-${fontSize}`;
			case SIZES.LG:
				return `px-8 py-3 text-${fontSize}`;
			case SIZES.MD:
				return `px-8 py-3 text-${fontSize}`;
			case SIZES.SM:
				return `px-6 py-3 text-${fontSize}`;
			case SIZES.XS:
				return `px-4 py-2 text-${fontSize}`;
			default:
				return `px-8 py-2 text-${fontSize}`;
		}
	};
	return (
		<input
			className={[
				'placeholder-shown:uppercase',
				'bg-white',
				noBorder ? 'border-0' : 'border',
				'border-grey',
				'rounded-button-md',
				'active:border-primary',
				'focus-visible:border-primary',
				setInputSize(size, fontSize),
			].join(' ')}
			style={{ width, padding, height }}
			id={id}
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			value={value}
			checked={checked}
			min={min}
			max={max}
			accept={accept}
			src={src}
			disabled={disabled}
		/>
	);
};
