import React from "react";
import { ImageProps } from "react-native";
export interface IImageProps extends ImageProps {
    className?: string;
}
declare const Image: React.FC<IImageProps>;
export default Image;
