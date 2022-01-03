import React from 'react';
import { Sizes, SIZES } from '../types';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
    size = SIZES.MD,
    placeholder,
    disabled,
    onChange,
    width,
    height,
    padding,
}) => {
    const setInputSize = (size: Sizes) => {
        switch(size) {
            case SIZES.XL:
                return 'px-10 py-3 text-xl';
            case SIZES.LG:
                return 'px-8 py-3 text-lg';
            case SIZES.MD:
                return 'px-8 py-3 text-md';
            case SIZES.SM:
                return 'px-6 py-3 text-sm';
            case SIZES.XS:
                return 'px-4 py-2 text-normal';
            default:
                return 'px-8 py-2 text-md';
        }
    }
    return (
        <input
            className={`bg-white border border-grey rounded-button-lg active:border-primary focus-visible:border-primary ${setInputSize(size)}`}
            style={{width, padding, height}}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
        />
    )
}
