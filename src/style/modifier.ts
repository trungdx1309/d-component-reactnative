/* eslint-disable import/prefer-default-export */

import { isEmpty, isArray } from "lodash";
import Colors from "./constant/AppColors";

export const generateStyleValue = (
  variants: any,
  values: any,
  defaultValues?: any
): any => {
  const res: any = {};
  if (!isEmpty(variants) && !isEmpty(values)) {
    try {
      Object.keys(variants).forEach((variant) => {
        Object.keys(values).forEach((valueKey) => {
          let className;
          if (valueKey) {
            className = `${variant}-${valueKey}`;
          } else {
            className = `${variant}`;
          }
          const att = variants?.[variant as any];
          const value = values?.[valueKey as any];
          let obj: any = {};
          if (isArray(att)) {
            att.forEach((i) => {
              obj[i] = value;
            });
          } else {
            obj[att] = value;
          }
          if (defaultValues) {
            obj = { ...obj, ...defaultValues };
          }
          res[className] = obj;
        });
      });
    } catch (error) {
      console.error("Generate style value errors", { error });
    }
  }
  return res;
};

export const getColorValue = (color: string) => {
  let value: any = color;
  //@ts-ignore
  if (Colors[color]) {
    //@ts-ignore
    value = Colors[color] as any;
  }
  return value;
};

export default {
  generateStyleValue,
};
