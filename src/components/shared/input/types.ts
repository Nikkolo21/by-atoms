import { Sizes } from "../types";

export interface InputProps {
    size?: Sizes;
    placeholder: string;
    disabled?: boolean;
    onChange: () => void;
    width?: string;
    height?: string;
    padding?: string;
}