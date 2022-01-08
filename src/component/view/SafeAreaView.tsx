import React from "react";
import {
  SafeAreaView as SafeAreaViewRN,
  useColorScheme,
  ViewProps,
} from "react-native";
import Colors from "../../style/color/_color";
import { getStyleProps } from "../../style/style";
import { ThemeProps } from "../../interface/iTheme";

export interface ISafeAreaViewProps extends ViewProps, ThemeProps {
  className?: string;
}

const { dark, light } = Colors;

const SafeAreaView: React.FC<ISafeAreaViewProps> = ({
  children,
  style,
  useLightColor,
  colorDarkMode,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  let backgroundColor = useLightColor ? light : undefined;
  if (isDarkMode) {
    backgroundColor = colorDarkMode || dark;
  }
  const defaultStyle = { backgroundColor };
  return (
    <SafeAreaViewRN style={[defaultStyle, transStyle, style]}>
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
