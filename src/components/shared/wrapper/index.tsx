import React from 'react';
import { WrapperProps, DISPLAY, FLEX_DIRECTION, JUSTIFY_ITEM, PLACE_ITEM } from './types';

export const Wrapper: React.FC<WrapperProps> = ({
    width,
    height,
    backgroundColor,
    display = DISPLAY.FLEX,
    placeItems = PLACE_ITEM.NORMAL,
    flexDirection = FLEX_DIRECTION.ROW,
    justifyItems = JUSTIFY_ITEM.END,
    children,
}) => {
    const setDisplay = () => {
        switch(display) {
            case DISPLAY.BLOCK:
                return ['block'];
            case DISPLAY.FLEX:
                return ['flex', `flex-${flexDirection}`, `justify-items-${justifyItems}`];
            case DISPLAY.GRID:
                return ['grid', `place-items-${placeItems}`];
            default:
                return ['flex', `flex-${flexDirection}`, `justify-items-${justifyItems}`];
        }
    }

    return (
        <div className={[
            'w-full',
            'h-fit',
            ...setDisplay(),
        ].join(' ')}
        style={{backgroundColor, height, width}}>
            {children}
        </div>
    )
}
