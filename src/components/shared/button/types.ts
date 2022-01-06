import { Sizes, Types } from "../types";

export interface ButtonProps {
    size?: Sizes;
    buttonType?: "button" | "submit" | "reset" | undefined;
    text: string;
    disabled?: boolean;
    type?: Types;
    backgroundColor?: string;
    width?: string;
    height?: string;
    letterSpacing?: string;
    fontSize?: Sizes;
    onClick?: () => void;
}
