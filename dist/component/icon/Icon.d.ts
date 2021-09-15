import React from "react";
import { IconProps } from "react-native-elements";
export interface IIconProps extends IconProps {
    className?: string;
}
declare const Icon: React.FC<IIconProps>;
export default Icon;
