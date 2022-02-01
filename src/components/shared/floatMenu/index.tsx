import React, { useState } from 'react';
import { FloatMenuProps } from './types';

export const FloatMenu: React.FC<FloatMenuProps> = ({element, position, children}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    const setPosition = () => {
        switch (position) {
            case 'bottom-left':
                return ['bottom-auto', 'right-0']
            case 'bottom-right':
                return ['bottom-auto', 'left-0'];
            default:
                return ['bottom-auto', 'right-0']
        }
    }

    return (
        <div className='relative cursor-pointer h-6' onClick={openMenu} onMouseLeave={closeMenu}>
            {element}
            <div hidden={!menuIsOpen} className={['absolute', 'z-10', 'h-auto', 'w-64', 'p-1', ...setPosition()].join(' ')}>
                {children}
            </div>
        </div>
    )
}
