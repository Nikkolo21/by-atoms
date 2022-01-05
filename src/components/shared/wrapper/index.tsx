/** @format */

import React from 'react';
import { WrapperProps, DISPLAY, FLEX_DIRECTION, POSITION_ITEM } from './types';

export const Wrapper: React.FC<WrapperProps> = ({
	width,
	maxWidth,
	height,
	padding,
	backgroundColor,
	gap,
	display = DISPLAY.FLEX,
	flexDirection = FLEX_DIRECTION.ROW,
	placeItems = POSITION_ITEM.NORMAL,
	justifyItems = POSITION_ITEM.START,
	justifyContent = POSITION_ITEM.START,
	children,
}) => {
	const setDisplay = () => {
		switch (display) {
			case DISPLAY.BLOCK:
				return ['block'];
			case DISPLAY.FLEX:
				return [
					'flex',
					`flex-${flexDirection}`,
					`justify-items-${justifyItems}`,
					`place-content-${justifyContent}`,
				];
			case DISPLAY.GRID:
				return ['grid', `place-items-${placeItems}`];
			default:
				return [
					'flex',
					`flex-${flexDirection}`,
					`justify-items-${justifyItems}`,
					`place-content-${justifyContent}`,
				];
		}
	};

	return (
		<div
			className={['w-full', 'h-fit', ...setDisplay()].join(' ')}
			style={{ backgroundColor, height, width, maxWidth, padding, gap }}
		>
			{children}
		</div>
	);
};
