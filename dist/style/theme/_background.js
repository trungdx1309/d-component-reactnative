import { StyleSheet } from "react-native";
import AppColors from "../constant/AppColors";
import { generateStyleValue } from "../modifier";
export const BACKGROUND_VARIATIONS = {
  bg: "backgroundColor"
};
const backgroundClass = generateStyleValue(BACKGROUND_VARIATIONS, AppColors);
const backgroundStyle = StyleSheet.create({
  "bg-transparent": {
    backgroundColor: "transparent"
  },
  ...backgroundClass
});
export default backgroundStyle;