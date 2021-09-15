import React from "react";
import { TextProps } from "react-native";
export interface ITextProps extends TextProps {
    className?: string;
}
declare const Text: React.FC<ITextProps>;
export default Text;
