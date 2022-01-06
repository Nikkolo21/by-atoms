/** @format */

import React from 'react';
import { Text } from '../text';
import { Sizes, SIZES, Types, TYPES } from '../types';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
	size = SIZES.MD,
	text,
	disabled,
	buttonType,
	type = TYPES.PRIMARY,
	backgroundColor,
	width,
	height,
	letterSpacing,
	fontSize = SIZES.SM,
	icon,
	onClick,
}) => {
	const setButtonType = (type: Types) => {
		switch (type) {
			case TYPES.PRIMARY:
				return ['bg-primary', 'text-white'];
			case TYPES.SECONDARY:
				return ['bg-secondary', 'text-white'];
			case TYPES.WHITE:
				return ['bg-white', 'text-primary', 'border-primary'];
			case TYPES.TERTIARY:
				return ['bg-tertiary', 'text-white', 'border-tertiary'];
			case TYPES.ERROR:
				return ['bg-error', 'text-white'];
			case TYPES.BONE:
				return ['bg-bone', 'text-black', 'border-bone'];
			default:
				return ['bg-primary', 'text-white'];
		}
	};

	const setButtonSize = (size: Sizes, fontSize: Sizes) => {
		switch (size) {
			case SIZES.XL:
				return ['px-10', 'py-4'];
			case SIZES.LG:
				return ['px-8', 'py-4'];
			case SIZES.MD:
				return ['px-6', 'py-3'];
			case SIZES.SM:
				return ['px-3', 'py-2'];
			case SIZES.XS:
				return ['px-2', 'py-1'];
			default:
				return ['px-6', 'py-3'];
		}
	};

	return (
		<button
			className={[
				'uppercase',
				'border',
				'rounded-button-lg',
				'shadow-sm',
				`${disabled && 'disabled'}`,
				`${icon && 'flex gap-2 items-center'}`,
				...setButtonType(type),
				...setButtonSize(size, fontSize),
			].join(' ')}
			style={{ backgroundColor, width, height }}
			onClick={disabled ? () => {} : onClick}
			type={buttonType}>
			{icon}
			<Text fontSize={fontSize} letterSpacing={letterSpacing}>
				{text}
			</Text>
		</button>
	);
};
