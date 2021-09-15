import { forEach, split } from "lodash";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import flexStyle from "./layout/_flex";
import marginPadding from "./layout/_padding-margin";
import backgroundStyle from "./theme/_background";
import borderStyle from "./theme/_border";
import widthHeightStyle from "./layout/_width-height";
import textStyle from "./font/_text";
import positionStyle from "./layout/_position";

export const getStyleProps = (props: any) => {
  const classStr = props?.className ?? "";
  const classArr = split(classStr, " ");
  const styleProps: ViewStyle[] | TextStyle[] = [];
  forEach(classArr, (name: any) => {
    if (style[name as keyof typeof style]) {
      styleProps.push(style[name as keyof typeof style]);
    }
  });
  return styleProps;
};

const style = StyleSheet.create({
  ...flexStyle,
  ...marginPadding,
  ...backgroundStyle,
  ...borderStyle,
  ...widthHeightStyle,
  ...textStyle,
  ...positionStyle,
});

export default style;
