import React from 'react';
import { HeaderProps } from './types';
import './header.css';

export const Header: React.FC<HeaderProps> = ({
    height,
    children,
}) => {
    return (
        <div className='header flex px-16 justify-between items-center w-full min-h-header h-fit bg-bone sticky top-0' style={{height}}>
            {children}
        </div>
    )
}
