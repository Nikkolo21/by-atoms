/** @format */

import React from 'react';
import { WrapperProps, DISPLAY } from './types';

export const Wrapper: React.FC<WrapperProps> = ({
	className,
	title,
	children,
	display = DISPLAY.FLEX,
}) => {
	return <div title={title} className={`${display} w-full ${className}`}>{children}</div>;
};
