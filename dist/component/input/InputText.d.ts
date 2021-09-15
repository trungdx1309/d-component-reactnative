import React from "react";
import { StyleProp, TextInputProps, TextStyle } from "react-native";
export interface IInputTextProps extends TextInputProps {
    variant?: "standard" | "outline" | "rounded" | "pill";
    label?: any;
    error?: any;
    height?: number;
    className?: string;
    classNameLabel?: string;
    classNameWrapper?: string;
    classNameInput?: string;
    iconName?: string;
    styleInput?: StyleProp<TextStyle>;
    onPressIcon?: (props?: any) => any;
}
export interface IInputTextMethod {
}
declare const _default: React.ForwardRefExoticComponent<IInputTextProps & React.RefAttributes<IInputTextMethod>>;
export default _default;
export interface ITextInputProps extends TextInputProps {
    className?: string;
}
export declare const TextInput: React.FC<ITextInputProps>;
