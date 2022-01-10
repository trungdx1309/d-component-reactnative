import React from "react";
import { View as ViewRN, ViewProps, useColorScheme } from "react-native";
import Colors from "../../style/color/_color";
import { getStyleProps } from "../../style/style";
import { ThemeProps } from "../../interface/iTheme";

export interface IViewProps extends ViewProps, ThemeProps {
  className?: string;
}

const { dark, light } = Colors;

const View: React.FC<IViewProps> = ({
  children,
  style,
  colorDarkMode,
  useLightColor,
  ...rest
}) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  let backgroundColor = useLightColor ? light : undefined;
  if (isDarkMode) {
    backgroundColor = colorDarkMode || dark;
  }
  const defaultStyle = { backgroundColor };
  return (
    <ViewRN style={[defaultStyle, tranStyle, style]} {...rest}>
      {children}
    </ViewRN>
  );
};

export default View;
