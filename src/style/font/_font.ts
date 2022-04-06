import _ from "lodash";
import DefaultFont, { AppFontKeyType } from "../constant/AppFonts";

export class AppFontClass {
  [key: string]: any;

  constructor() {
    Object.assign(this, DefaultFont);
  }

  /**
   * Load custom set of sizes
   * arguments:
   * sizes - map of keys and size values e.g {inputHeight: 50, buttonHeight: 30}
   */
  loadSizes(sizes: { [key in Partial<AppFontKeyType>]: string | number }) {
    _.forEach(sizes, (value, key) => {
      this[key] = value;
    });
  }
}

const Fonts = new AppFontClass();
Fonts.loadSizes(DefaultFont);

export default Fonts;
