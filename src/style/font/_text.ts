/* eslint-disable no-plusplus */
import { StyleSheet, Platform } from "react-native";
import Colors from "../color/_color";
import { generateStyleValue } from "../modifier";

export const base = {
  fontSize: 10,
  lineHeight: 12,
  ...Platform.select({
    ios: {
      fontFamily: "Poppins-Regular",
    },
    android: {
      fontFamily: "Poppins-Reg",
    },
  }),
};

export const TEXT_ALIGN_VARIANTS = { text: "textAlign" };
export const TEXT_DECOR_VARIANTS = { text: "textDecorationLine" };
export const TEXT_TRANSFORM_VARIANTS = { text: "textTransform" };
export const FONT_WEIGHT_VARIANT = { "font-weight": "fontWeight" };

const textSizeClass: any = {};
for (let i = 0; i < 100; i++) {
  textSizeClass[`size-${i}`] = {
    fontSize: i,
  };
}

const textLineHeightClass: any = {};
for (let i = 0; i <= 50; i += 1) {
  textLineHeightClass[`text-height-${i}`] = {
    lineHeight: i,
  };
}

export const FONT_WEIGHT_VALUE = {
  100: "100",
  200: "200",
  300: "300",
  400: "400",
  500: "500",
  600: "600",
  700: "700",
  800: "800",
  900: "900",
  normal: "normal",
  bold: "bold",
};

export const TEXT_ALIGN_VALUE = {
  auto: "auto",
  start: "left",
  left: "left",
  end: "right",
  right: "right",
  center: "center",
  justify: "justify",
};

export const TEXT_DECOR_VALUE = {
  none: "none",
  underline: "underline",
  "line-through": "line-through",
  "underline line-through": "underline line-through",
};

export const TEXT_TRANSFORM_VALUE = {
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

const textColorClass = generateStyleValue({ text: "color" }, Colors);

const textAlignClass = generateStyleValue(
  TEXT_ALIGN_VARIANTS,
  TEXT_ALIGN_VALUE
);

const textDecorClass = generateStyleValue(
  TEXT_DECOR_VARIANTS,
  TEXT_DECOR_VALUE
);

const textTransformClass = generateStyleValue(
  TEXT_TRANSFORM_VARIANTS,
  TEXT_TRANSFORM_VALUE
);

const fontWeightClass = generateStyleValue(
  FONT_WEIGHT_VARIANT,
  FONT_WEIGHT_VALUE
);

const textStyle = StyleSheet.create({
  h0: {
    ...base,
    fontSize: base.fontSize * 2,
    lineHeight: base.fontSize * 2 * 1.1,
  },
  h1: {
    ...base,
    fontSize: base.fontSize * 1.8,
    lineHeight: base.fontSize * 1.8 * 1.2,
  },
  h2: {
    ...base,
    fontSize: base.fontSize * 1.6,
    lineHeight: base.fontSize * 1.6 * 1.3,
  },
  h3: {
    ...base,
    fontSize: base.fontSize * 1.4,
    lineHeight: base.fontSize * 1.4 * 1.4,
  },
  h4: {
    ...base,
    fontSize: base.fontSize * 1.2,
    lineHeight: base.fontSize * 1.2 * 1.5,
  },
  h5: { ...base },
  text: { ...base },
  ...textColorClass,
  ...textAlignClass,
  ...textDecorClass,
  ...textTransformClass,
  ...textSizeClass,
  ...fontWeightClass,
  ...textLineHeightClass,
});

export default textStyle;
