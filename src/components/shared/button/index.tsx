import React from 'react';
import { ButtonProps, ButtonSize, ButtonType, BUTTON_SIZE, BUTTON_TYPE } from './types';

export const Button: React.FC<ButtonProps> = ({
    size = BUTTON_SIZE.MD,
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

    const setButtonSize = (size: ButtonSize) => {
        switch(size) {
            case BUTTON_SIZE.XL:
                return 'px-8 py-3 text-xl';
            case BUTTON_SIZE.LG:
                return 'px-7 py-3 text-lg';
            case BUTTON_SIZE.MD:
                return 'px-6 py-2 text-base';
            case BUTTON_SIZE.SM:
                return 'px-3 py-2 text-sm';
            case BUTTON_SIZE.XS:
                return 'px-3 py-1 text-xs';
            default:
                return 'px-4 py-2 text-base';
        }
    }

    return (
        <button className={`uppercase border-0 rounded-button-lg shadow-sm ${setButtonType(type)} ${setButtonSize(size)}`} style={{backgroundColor}} onClick={onClick}>
            {text}
        </button>
    )
}
