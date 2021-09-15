import React from "react";
import { ScrollViewProps } from "react-native";
export interface IScrollViewProps extends ScrollViewProps {
    className?: string;
    children?: any;
}
export interface IScrollViewMethod {
}
declare const _default: React.ForwardRefExoticComponent<IScrollViewProps & React.RefAttributes<IScrollViewMethod>>;
export default _default;
