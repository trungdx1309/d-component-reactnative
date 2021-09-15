import { StyleSheet } from "react-native";
import AppSizes from "../constant/AppSizes";
import { generateStyleValue } from "../modifier";
const {
  paddingTiny,
  paddingXSml,
  paddingMedium,
  paddingXXLarge
} = AppSizes;
export const PADDING_KEY_PATTERN = new RegExp(`p[ltrbxy]?-([0-9]*)`);
export const PADDING_VARIATIONS = {
  p: "padding",
  pl: "paddingLeft",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  px: "paddingHorizontal",
  py: "paddingVertical"
};
const MARGIN_VARIATIONS = {
  m: "margin",
  ml: "marginLeft",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  mx: "marginHorizontal",
  my: "marginVertical"
};
export const MARGIN_PADDING_VALUES = {
  0: 0,
  1: paddingTiny,
  2: paddingXSml,
  3: paddingMedium,
  4: paddingXXLarge
};
const paddingClass = generateStyleValue(PADDING_VARIATIONS, MARGIN_PADDING_VALUES);
const marginClass = generateStyleValue(MARGIN_VARIATIONS, MARGIN_PADDING_VALUES);
const marginPadding = StyleSheet.create({ ...paddingClass,
  ...marginClass
});
export default marginPadding;