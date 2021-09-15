/* ----------------------------------------
// Input
// ---------------------------------------- */

export type {
  IInputTextProps,
  IInputTextMethod,
} from "./component/input/InputText";
export { default as InputText } from "./component/input/InputText";

/* ----------------------------------------
// View
// ---------------------------------------- */

export type { IViewProps } from "./component/view/View";
export { default as View } from "./component/view/View";

export type {
  IScrollViewProps,
  IScrollViewMethod,
} from "./component/view/ScrollView";
export { default as ScrollView } from "./component/view/ScrollView";

export type { ISafeAreaViewProps } from "./component/view/SafeAreaView";
export { default as SafeAreaView } from "./component/view/SafeAreaView";

export type {
  ITouchableOpacityProps,
  ITouchableOpacityMethod,
} from "./component/view/TouchableOpacity";
export { default as TouchableOpacity } from "./component/view/TouchableOpacity";

/* ----------------------------------------
// Button
// ---------------------------------------- */

export type { IButtonProps } from "./component/button/Button";
export { default as Button } from "./component/button/Button";

/* ----------------------------------------
// Style
// ---------------------------------------- */

export { default as Colors } from "./style/color/_color";
export { default as Scheme } from "./style/color/_scheme";
export { isDark } from "./style/color/_color";
