import React from 'react';
import { LinkProps } from './types';

export const Link: React.FC<LinkProps> = ({
    type,
    onClick,
    children,
}) => {
    return (
        <a
            onClick={onClick}
            className={[
                'cursor-pointer',
                `text-${type}`,
            ].join(' ')}
        >
            {children}   
        </a>
    )
}
