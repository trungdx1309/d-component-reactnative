import React from "react";
import { View as ViewRN, ViewProps, useColorScheme } from "react-native";
import Colors from "../../style/color/_color";
import { getStyleProps } from "../../style/style";

export interface IViewProps extends ViewProps {
  className?: string;
}

const { dark, light } = Colors;

const View: React.FC<IViewProps> = ({ children, style, ...rest }) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = { backgroundColor: isDarkMode ? dark : light };
  return (
    <ViewRN style={[defaultStyle, tranStyle, style]} {...rest}>
      {children}
    </ViewRN>
  );
};

export default View;
