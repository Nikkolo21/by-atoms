/** @format */

export type Display = 'flex' | 'grid' | 'block';

export enum DISPLAY {
	FLEX = 'flex',
	GRID = 'grid',
	BLOCK = 'block',
}

export interface WrapperProps {
	display?: Display;
	title?: string;
	className?: string;
}
