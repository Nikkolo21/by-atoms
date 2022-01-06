import React from 'react';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({
    children,
    fontSize,
    letterSpacing,
}) => {
    return (
        <div className={`text-${fontSize}`} style={{letterSpacing}}>
            {children}   
        </div>
    )
}
