/** @format */

import React from 'react';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({
	children,
	fontSize,
	fontWeight,
	letterSpacing,
}) => {
	return (
		<div className={`text-${fontSize} font-${fontWeight}`} style={{ letterSpacing }}>
			{children}
		</div>
	);
};
