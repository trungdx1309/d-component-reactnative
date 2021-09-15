import _pt from "prop-types";
import React from "react";
import { View as ViewRN, useColorScheme } from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";
const {
  dark,
  light
} = Colors;

const View = ({
  children,
  style,
  ...rest
}) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    backgroundColor: isDarkMode ? dark : light
  };
  return <ViewRN style={[defaultStyle, tranStyle, style]} {...rest}>
      {children}
    </ViewRN>;
};

View.propTypes = {
  className: _pt.string
};
export default View;