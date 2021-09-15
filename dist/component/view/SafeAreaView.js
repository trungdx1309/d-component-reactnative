import _pt from "prop-types";
import React from "react";
import { SafeAreaView as SafeAreaViewRN, useColorScheme } from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";
const {
  dark,
  light
} = Colors;

const SafeAreaView = ({
  children,
  style,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    backgroundColor: isDarkMode ? dark : light
  };
  return <SafeAreaViewRN style={[defaultStyle, transStyle, style]}>
      {children}
    </SafeAreaViewRN>;
};

SafeAreaView.propTypes = {
  className: _pt.string,
  children: _pt.any
};
export default SafeAreaView;