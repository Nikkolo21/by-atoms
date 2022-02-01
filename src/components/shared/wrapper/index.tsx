/** @format */

import React from 'react';
import { WrapperProps, DISPLAY } from './types';

export const Wrapper: React.FC<WrapperProps> = ({
	className,
	children,
	display = DISPLAY.FLEX,
}) => {
	return <div className={`${display} w-full ${className}`}>{children}</div>;
};
