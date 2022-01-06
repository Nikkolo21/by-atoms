/** @format */

import React from 'react';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ height, children }) => {
	return (
		<div
			className="header flex px-8 justify-between items-center w-full min-h-header h-fit bg-white sticky top-0"
			style={{ height }}
		>
			{children}
		</div>
	);
};
