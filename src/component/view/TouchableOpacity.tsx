import React from "react";
import {
  TouchableOpacity as TouchableOpacityRN,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import { getStyleProps } from "../../style/style";

export interface ITouchableOpacityProps extends TouchableOpacityProps {
  className?: string;
  children?: any;
}

export interface ITouchableOpacityMethod {}

const TouchableOpacity: React.ForwardRefRenderFunction<
  ITouchableOpacityMethod,
  ITouchableOpacityProps
> = ({ children, style, ...rest }, ref) => {
  const tranStyle = getStyleProps(rest);
  return (
    <TouchableOpacityRN style={[tranStyle, style]} {...rest}>
      {children}
    </TouchableOpacityRN>
  );
};

export default React.forwardRef(TouchableOpacity);
