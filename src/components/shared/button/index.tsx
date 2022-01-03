import React from 'react';
import { Sizes, SIZES } from '../types';
import { ButtonProps, ButtonType, BUTTON_TYPE } from './types';

export const Button: React.FC<ButtonProps> = ({
    size = SIZES.MD,
    text,
    disabled,
    type = BUTTON_TYPE.PRIMARY,
    backgroundColor,
    onClick,
}) => {
    const setButtonType = (type: ButtonType) => {
        switch(type) {
            case BUTTON_TYPE.PRIMARY:
                return 'bg-primary text-white';
            case BUTTON_TYPE.SECONDARY:
                return 'bg-secondary text-white';
            case BUTTON_TYPE.WHITE:
                return 'bg-white text-primary border-primary';
            case BUTTON_TYPE.TERTIARY:
                return 'bg-tertiary text-black';
            case BUTTON_TYPE.ERROR:
                return 'bg-error text-white';
            case BUTTON_TYPE.BONE:
                return 'bg-bone text-black';
            default:
                return 'bg-primary text-white';
        }
    }

    const setButtonSize = (size: Sizes) => {
        switch(size) {
            case SIZES.XL:
                return 'px-8 py-3 text-xl';
            case SIZES.LG:
                return 'px-7 py-3 text-lg';
            case SIZES.MD:
                return 'px-6 py-2 text-normal';
            case SIZES.SM:
                return 'px-3 py-2 text-sm';
            case SIZES.XS:
                return 'px-3 py-1 text-xs';
            default:
                return 'px-6 py-2 text-normal';
        }
    }

    return (
        <button className={`uppercase border rounded-button-lg shadow-sm ${setButtonType(type)} ${setButtonSize(size)}`} style={{backgroundColor}} onClick={onClick}>
            {text}
        </button>
    )
}
