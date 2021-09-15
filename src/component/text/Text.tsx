import React from "react";
import { Text as RNText, TextProps, useColorScheme } from "react-native";
import { getStyleProps } from "../../style/style";
import { base } from "../../style/font/_text";
import Colors from "../../style/constant/AppColors";

export interface ITextProps extends TextProps {
  className?: string;
}

const { dark, light } = Colors;

const Text: React.FC<ITextProps> = ({ children, ...rest }) => {
  const { style } = rest;
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = { color: isDarkMode ? light : undefined };
  return <RNText style={[defaultStyle, transStyle, style]}>{children}</RNText>;
};

export default Text;
