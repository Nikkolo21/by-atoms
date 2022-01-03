import { Sizes } from "../types";

export enum BUTTON_TYPE {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
    BONE = 'bone',
    TERTIARY = 'tertiary',
    WHITE = 'white',
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'error' | 'bone' | 'white';

export interface ButtonProps {
    size?: Sizes;
    text: string;
    disabled?: boolean;
    type?: ButtonType;
    backgroundColor?: string;
    onClick: () => void;
}
