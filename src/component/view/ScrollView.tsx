import React, { forwardRef } from "react";
import {
  ScrollView as ScrollViewRN,
  ScrollViewProps,
  useColorScheme,
} from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";

export interface IScrollViewProps extends ScrollViewProps {
  className?: string;
  children?: any;
}

export interface IScrollViewMethod {}

const { dark, light } = Colors;

const ScrollView: React.ForwardRefRenderFunction<
  IScrollViewMethod,
  IScrollViewProps
> = ({ children, style, ...rest }, ref) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = { backgroundColor: isDarkMode ? dark : light };
  return (
    <ScrollViewRN style={[defaultStyle, tranStyle, style]}>
      {children}
    </ScrollViewRN>
  );
};

export default forwardRef(ScrollView);
