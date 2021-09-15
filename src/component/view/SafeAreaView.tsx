import React from "react";
import {
  SafeAreaView as SafeAreaViewRN,
  useColorScheme,
  ViewProps,
} from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";

export interface ISafeAreaViewProps extends ViewProps {
  className?: string;
  children?: any;
}

const { dark, light } = Colors;

const SafeAreaView: React.FC<ISafeAreaViewProps> = ({
  children,
  style,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = { backgroundColor: isDarkMode ? dark : light };
  return (
    <SafeAreaViewRN style={[defaultStyle, transStyle, style]}>
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
