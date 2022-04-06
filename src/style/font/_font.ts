import _ from "lodash";
import DefaultFont, { AppFontKeyType } from "../constant/AppFonts";

export class AppFontClass {
  [key: string]: any;

  constructor() {
    Object.assign(this, DefaultFont);
  }

  /**
   * Load custom set of fonts
   * arguments:
   * fonts - map of keys and font family values e.g {iosFont: Poppins-Regular}
   */
  loadFonts(fonts: { [key in Partial<AppFontKeyType>]: string }) {
    _.forEach(fonts, (value, key) => {
      this[key] = value;
    });
  }
}

const Fonts = new AppFontClass();
Fonts.loadFonts(DefaultFont);

export default Fonts;
