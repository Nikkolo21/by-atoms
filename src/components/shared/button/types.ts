export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export enum BUTTON_SIZE {
    XL = 'xl',
    LG = 'lg',
    MD = 'md',
    SM = 'sm',
    XS = 'xs',
}

export enum BUTTON_TYPE {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
    BONE = 'bone',
    TERTIARY = 'tertiary',
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'error' | 'bone';

export interface ButtonProps {
    size?: ButtonSize;
    text: string;
    disabled?: boolean;
    type?: ButtonType;
    backgroundColor?: string;
    onClick: () => void;
}
