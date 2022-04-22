import React from "react";
import {
  Text as RNText,
  TextProps,
  TextStyle,
  useColorScheme,
} from "react-native";
import Colors from "../../style/color/_color";
import { ColorKeyType } from "../../style/constant/AppColors";
import Fonts from "../../style/font/_font";
import { getColorValue } from "../../style/modifier";
import { getStyleProps } from "../../style/style";

export interface ITextProps extends TextProps {
  className?: string;
  color?: ColorKeyType;
  colorDarkMode?: ColorKeyType;
}

const Text: React.FC<ITextProps> = ({
  children,
  color,
  colorDarkMode,
  style,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const { light } = Colors;
  const { fontClass } = Fonts;

  const defaultStyle: TextStyle = {
    ...fontClass.h4,
    color: isDarkMode ? light : undefined,
  };

  const listStyle = [defaultStyle, transStyle, style];
  if (color) {
    const colorValue = getColorValue(color);
    listStyle.push({ color: colorValue });
  }
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
