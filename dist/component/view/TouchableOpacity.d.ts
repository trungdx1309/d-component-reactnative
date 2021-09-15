import React from "react";
import { TouchableOpacityProps } from "react-native";
export interface ITouchableOpacityProps extends TouchableOpacityProps {
    className?: String;
    children?: any;
}
export interface ITouchableOpacityMethod {
}
declare const _default: React.ForwardRefExoticComponent<ITouchableOpacityProps & React.RefAttributes<ITouchableOpacityMethod>>;
export default _default;
