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
    height?: string;
    padding?: string;
    backgroundColor?: string;
    flexDirection?: FlexPosition;
    justifyItems?: PositionItems;
    placeItems?: PositionItems;
    justifyContent?: PositionItems;
}
