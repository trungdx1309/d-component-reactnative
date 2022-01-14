import React from "react";
import { Text as RNText, TextProps, useColorScheme } from "react-native";
import Colors from "../../style/color/_color";
import { getColorValue } from "../../style/modifier";
import { getStyleProps } from "../../style/style";

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
  style,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    color: color || isDarkMode ? light : undefined,
  };
  const listStyle = [defaultStyle, transStyle, style];
  if (isDarkMode && colorDarkMode) {
    const color = getColorValue(colorDarkMode);
    listStyle.push({ color });
  }
  return (
    <RNText {...rest} style={listStyle}>
      {children}
    </RNText>
  );
};

export default Text;
