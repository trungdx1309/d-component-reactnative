/* eslint-disable no-plusplus */
import { StyleSheet } from "react-native";
import AppSizes from "../constant/AppSizes";
import { generateStyleValue } from "../modifier";
const widthClass = {};
const heightClass = {};

for (let i = 0; i < 100; i++) {
  widthClass[`width-${i}`] = {
    width: i
  };
  heightClass[`height-${i}`] = {
    height: i
  };
}

const WIDTH_HEIGHT_PERCENTAGE_VALUE = {
  0: "0%",
  25: "25%",
  50: "50%",
  75: "75%",
  100: "100%"
};
const widthPercentageClass = generateStyleValue({
  w: "width"
}, WIDTH_HEIGHT_PERCENTAGE_VALUE);
const heightPercentageClass = generateStyleValue({
  h: "height"
}, WIDTH_HEIGHT_PERCENTAGE_VALUE);
console.log({
  widthPercentageClass
});
const widthHeightStyle = StyleSheet.create({
  "h-full": {
    height: AppSizes.screenHeight
  },
  "height-full": {
    height: AppSizes.screenHeight
  },
  "w-full": {
    height: AppSizes.screenWidth
  },
  "width-full": {
    height: AppSizes.screenWidth
  },
  ...widthClass,
  ...heightClass,
  ...widthPercentageClass,
  ...heightPercentageClass
});
export default widthHeightStyle;