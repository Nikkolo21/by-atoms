/** @format */

import React from 'react';
import { SIZES, Sizes } from '../types';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({
	children,
	fontSize,
	fontWeight = 'normal',
	letterSpacing = 'normal',
}) => {
	return (
		<div
			className={`text-${fontSize} font-${fontWeight} tracking-[${letterSpacing}]`}>
			{children}
		</div>
	);
};
