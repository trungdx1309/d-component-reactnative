import Colors from "../style/color/_color";
import Sizes from "../style/size/_size";
import Fonts from "../style/font/_font";

Colors.loadColors({ primary: "red" });
//@ts-ignore
// Sizes.loadSizes({ buttonHeight: 20 });
Fonts.loadFonts({
  iosFont: "Prompt-Regular",
  baseFontSize: 12,
  label: {
    fontWeight: "900",
  },
});
