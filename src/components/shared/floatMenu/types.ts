import { ReactElement } from "react";

export interface FloatMenuProps {
    element: ReactElement;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}