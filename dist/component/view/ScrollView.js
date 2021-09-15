import React, { forwardRef } from "react";
import { ScrollView as ScrollViewRN, useColorScheme } from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";
const {
  dark,
  light
} = Colors;

const ScrollView = ({
  children,
  style,
  ...rest
}, ref) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    backgroundColor: isDarkMode ? dark : light
  };
  return <ScrollViewRN style={[defaultStyle, tranStyle, style]}>
      {children}
    </ScrollViewRN>;
};

export default forwardRef(ScrollView);