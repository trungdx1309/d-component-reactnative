import { forEach, split } from "lodash";
import { StyleSheet } from "react-native";
import flexStyle from "./layout/_flex";
import marginPadding from "./layout/_padding-margin";
import backgroundStyle from "./theme/_background";
import borderStyle from "./theme/_border";
import widthHeightStyle from "./layout/_width-height";
import textStyle from "./font/_text";
import positionStyle from "./layout/_position";
export const getStyleProps = props => {
  const classStr = props?.className ?? "";
  const classArr = split(classStr, " ");
  const styleProps = [];
  forEach(classArr, name => {
    if (style[name]) {
      styleProps.push(style[name]);
    }
  });
  return styleProps;
};
const style = StyleSheet.create({ ...flexStyle,
  ...marginPadding,
  ...backgroundStyle,
  ...borderStyle,
  ...widthHeightStyle,
  ...textStyle,
  ...positionStyle
});
export default style;