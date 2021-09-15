import { StyleSheet, Platform } from "react-native";
import AppColors from "../constant/AppColors";
import { generateStyleValue } from "../modifier";
const textColorClass = generateStyleValue({
  text: "color"
}, AppColors);
export const base = {
  fontSize: 10,
  lineHeight: 12,
  ...Platform.select({
    ios: {
      fontFamily: "Poppins-Regular"
    },
    android: {
      fontFamily: "Poppins-Reg"
    }
  })
};
export const TEXT_ALIGN_VARIANTS = {
  text: "textAlign"
};
export const TEXT_DECOR_VARIANTS = {
  text: "textDecorationLine"
};
export const TEXT_TRANSFORM_VARIANTS = {
  text: "textTransform"
};
export const TEXT_ALIGN_VALUE = {
  auto: "auto",
  start: "left",
  left: "left",
  end: "right",
  right: "right",
  center: "center",
  justify: "justify"
};
export const TEXT_DECOR_VALUE = {
  none: "none",
  underline: "underline",
  "line-through": "line-through",
  "underline line-through": "underline line-through"
};
export const TEXT_TRANSFORM_VALUE = {
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase"
};
const textAlignClass = generateStyleValue(TEXT_ALIGN_VARIANTS, TEXT_ALIGN_VALUE);
const textDecorClass = generateStyleValue(TEXT_DECOR_VARIANTS, TEXT_DECOR_VALUE);
const textTransformClass = generateStyleValue(TEXT_TRANSFORM_VARIANTS, TEXT_TRANSFORM_VALUE);
const textStyle = StyleSheet.create({
  h0: { ...base,
    fontSize: base.fontSize * 2,
    lineHeight: base.fontSize * 2 * 1.1
  },
  h1: { ...base,
    fontSize: base.fontSize * 1.8,
    lineHeight: base.fontSize * 1.8 * 1.2
  },
  h2: { ...base,
    fontSize: base.fontSize * 1.6,
    lineHeight: base.fontSize * 1.6 * 1.3
  },
  h3: { ...base,
    fontSize: base.fontSize * 1.4,
    lineHeight: base.fontSize * 1.4 * 1.4
  },
  h4: { ...base,
    fontSize: base.fontSize * 1.2,
    lineHeight: base.fontSize * 1.2 * 1.5
  },
  h5: { ...base
  },
  text: { ...base
  },
  "font-weight-bold": {
    fontWeight: "bold"
  },
  ...textColorClass,
  ...textAlignClass,
  ...textDecorClass,
  ...textTransformClass
});
export default textStyle;