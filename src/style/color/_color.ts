/* eslint-disable import/prefer-default-export */
import _ from "lodash";
import tinycolor from "tinycolor2";
import DefaultColors from "../constant/AppColors";

export class ColorsClass {
  [key: string]: any;

  constructor() {
    Object.assign(this, DefaultColors);
  }

  /**
   * Load custom set of colors
   * arguments:
   * colors - map of keys and colors values e.g {grey10: '#20303C', grey20: '#43515C'}
   */
  loadColors(colors: { [key: string]: string }) {
    _.forEach(colors, (value, key) => {
      this[key] = value;
    });
  }
}

export const isDark = (color: string) => {
  const lum = tinycolor(color).getLuminance();
  return lum < 0.55;
};
//@ts-ignore
const Colors = new ColorsClass();
Colors.loadColors(DefaultColors);
export default Colors;
