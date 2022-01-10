import React, { forwardRef } from "react";
import {
  ScrollView as ScrollViewRN,
  ScrollViewProps,
  useColorScheme,
} from "react-native";
import Colors from "../../style/color/_color";
import { getStyleProps } from "../../style/style";
import { ThemeProps } from "../../interface/iTheme";

export interface IScrollViewProps extends ScrollViewProps, ThemeProps {
  className?: string;
}

export interface IScrollViewMethod {}

const { dark, light } = Colors;

const ScrollView: React.ForwardRefRenderFunction<
  IScrollViewMethod,
  IScrollViewProps
> = ({ children, style, colorDarkMode, useLightColor, ...rest }, ref) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  let backgroundColor = useLightColor ? light : undefined;
  if (isDarkMode) {
    backgroundColor = colorDarkMode || dark;
  }
  const defaultStyle = { backgroundColor };
  return (
    <ScrollViewRN style={[defaultStyle, tranStyle, style]} {...rest}>
      {children}
    </ScrollViewRN>
  );
};

export default forwardRef(ScrollView);
