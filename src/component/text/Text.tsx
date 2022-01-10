import React from "react";
import { Text as RNText, TextProps, useColorScheme } from "react-native";
import { getStyleProps } from "../../style/style";
import { base } from "../../style/font/_text";
import Colors from "../../style/color/_color";

export interface ITextProps extends TextProps {
  className?: string;
  color?: string;
  colorDarkMode?: string;
}

const { dark, light } = Colors;

const Text: React.FC<ITextProps> = ({
  children,
  color,
  colorDarkMode,
  ...rest
}) => {
  const { style } = rest;
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const textColor = color || undefined;
  const defaultStyle = {
    // color: color || isDarkMode ? light : undefined,
    color: textColor,
  };
  const listStyle = [defaultStyle, transStyle, style];
  if (isDarkMode) {
    listStyle.push({ color: colorDarkMode || light });
  }
  return <RNText style={listStyle}>{children}</RNText>;
};

export default Text;
