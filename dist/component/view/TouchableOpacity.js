import React from "react";
import { TouchableOpacity as TouchableOpacityRN } from "react-native";
import { getStyleProps } from "../../style/style";

const TouchableOpacity = ({
  children,
  style,
  ...rest
}, ref) => {
  const tranStyle = getStyleProps(rest);
  return <TouchableOpacityRN style={[tranStyle, style]} {...rest}>
      {children}
    </TouchableOpacityRN>;
};

export default React.forwardRef(TouchableOpacity);