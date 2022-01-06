import { Sizes } from "../types";

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps {
  size?: Sizes;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: any;
  onBlur?: any;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: Sizes;
  type?: InputType;
  noBorder?: boolean;
  value: any;
}
