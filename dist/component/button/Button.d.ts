import React from "react";
import { TouchableOpacityProps } from "react-native";
export interface IButtonProps extends TouchableOpacityProps {
    className?: string;
    classNameLabel?: string;
    children?: any;
    size?: "large" | "medium" | "small" | "x-small" | "auto" | "fit-content";
    variant?: "standard" | "outline" | "trans";
    shape?: "square" | "pill" | "rounded";
    color?: "primary" | "secondary" | "green" | "red" | "yellow" | "blue" | "gray" | "dark" | "light" | "error" | "success" | "warning" | "muted";
    iconName?: string;
    iconSize?: number;
    suffixIcon?: string;
    suffixElement?: any;
    prefixElement?: any;
    label?: string;
}
declare const Button: React.FC<IButtonProps>;
export default Button;
