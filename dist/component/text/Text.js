import _pt from "prop-types";
import React from "react";
import { Text as RNText, useColorScheme } from "react-native";
import { getStyleProps } from "../../style/style";
import Colors from "../../style/constant/AppColors";
const {
  dark,
  light
} = Colors;

const Text = ({
  children,
  ...rest
}) => {
  const {
    style
  } = rest;
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    color: isDarkMode ? light : undefined
  };
  return <RNText style={[defaultStyle, transStyle, style]}>{children}</RNText>;
};

Text.propTypes = {
  className: _pt.string
};
export default Text;