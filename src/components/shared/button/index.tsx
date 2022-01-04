import React from 'react';
import { Sizes, SIZES, Types, TYPES } from '../types';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
    size = SIZES.MD,
    text,
    disabled,
    type = TYPES.PRIMARY,
    backgroundColor,
    width,
    height,
    fontSize = SIZES.NORMAL,
    onClick,
}) => {
    const setButtonType = (type: Types) => {
        switch(type) {
            case TYPES.PRIMARY:
                return ['bg-primary', 'text-white'];
            case TYPES.SECONDARY:
                return ['bg-secondary', 'text-white'];
            case TYPES.WHITE:
                return ['bg-white', 'text-primary', 'border-primary'];
            case TYPES.TERTIARY:
                return ['bg-tertiary', 'text-white', 'border-tertiary'];
            case TYPES.ERROR:
                return ['bg-error', 'text-white'];
            case TYPES.BONE:
                return ['bg-bone', 'text-black', 'border-bone'];
            default:
                return ['bg-primary', 'text-white'];
        }
    }

    const setButtonSize = (size: Sizes, fontSize: Sizes) => {
        switch(size) {
            case SIZES.XL:
                return ['px-12', 'py-4', `text-${fontSize}`];
            case SIZES.LG:
                return ['px-10', 'py-4', `text-${fontSize}`];
            case SIZES.MD:
                return ['px-8', 'py-3', `text-${fontSize}`];
            case SIZES.SM:
                return ['px-4', 'py-2', `text-${fontSize}`];
            case SIZES.XS:
                return ['px-3', 'py-1', `text-${fontSize}`];
            default:
                return ['px-8', 'py-3', `text-${fontSize}`];
        }
    }

    return (
        <button
            className={[
                'uppercase',
                'border',
                'rounded-button-lg',
                'shadow-sm',
                ...setButtonType(type),
                ...setButtonSize(size, fontSize)
            ].join(' ')}
            disabled={disabled}
            style={{backgroundColor, width, height}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
