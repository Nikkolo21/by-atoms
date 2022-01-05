/** @format */

import { ReactElement } from 'react';
import { Sizes, Types } from '../types';

export interface ButtonProps {
	size?: Sizes;
	text: string;
	disabled?: boolean;
	type?: Types;
	backgroundColor?: string;
	width?: string;
	height?: string;
	fontSize?: Sizes;
	icon?: ReactElement;
	onClick?: () => void;
}
