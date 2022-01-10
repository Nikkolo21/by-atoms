/** @format */

export type Display = 'flex' | 'grid' | 'block';
export type FlexPosition = 'row' | 'col';
export type PositionItems = 'center' | 'end' | 'start' | 'normal';

export enum DISPLAY {
	FLEX = 'flex',
	GRID = 'grid',
	BLOCK = 'block',
}

export enum FLEX_DIRECTION {
	ROW = 'row',
	COLUMN = 'col',
}

export enum POSITION_ITEM {
	CENTER = 'center',
	START = 'start',
	END = 'end',
	NORMAL = 'normal',
}

export interface WrapperProps {
	display?: Display;
	width?: string;
	maxWidth?: string;
	maxHeight?: string;
	height?: string;
	boxShadow?: string;
	borderRadius?: string;
	position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
	padding?: string;
	margin?: string;
	flex?: string;
	gap?: string;
	backgroundColor?: string;
	flexDirection?: FlexPosition;
	justifyItems?: PositionItems;
	placeItems?: PositionItems;
	justifyContent?: PositionItems;
	className?: string;
}
