/* ----------------------------------------
// Input
// ---------------------------------------- */

export type {
  IInputTextProps,
  IInputTextMethod,
} from "./component/input/InputText";
export { default as InputText } from "./component/input/InputText";

export type {
  IInputDateProps,
  IInputDateMethod,
} from "./component/input/InputDate";
export { default as InputDate } from "./component/input/InputDate";

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
// Text
// ---------------------------------------- */

export type { ITextProps } from "./component/text/Text";
export { default as Text } from "./component/text/Text";

/* ----------------------------------------
// Button
// ---------------------------------------- */

export type { IButtonProps } from "./component/button/Button";
export { default as Button } from "./component/button/Button";

/* ----------------------------------------
// Image
// ---------------------------------------- */

export type { IImageProps } from "./component/image/Image";
export { default as Image } from "./component/image/Image";

export type { IAvatarProps } from "./component/avatar/Avatar";
export { default as Avatar } from "./component/avatar/Avatar";

export type {
  IAvatarNameProps,
  IUserBasic,
} from "./component/avatar/AvatarName";
export { default as AvatarName } from "./component/avatar/AvatarName";

/* ----------------------------------------
// Icon
// ---------------------------------------- */

export type { IIconProps } from "./component/icon/Icon";
export { default as Icon } from "./component/icon/Icon";

/* ----------------------------------------
// Checkbox
// ---------------------------------------- */

export type { ICheckBoxProps } from "./component/checkbox/CheckBox";
export { default as CheckBox } from "./component/checkbox/CheckBox";

/* ----------------------------------------
// Style
// ---------------------------------------- */

export { default as Colors } from "./style/color/_color";
export { default as Scheme } from "./style/color/_scheme";
export { isDark } from "./style/color/_color";

/* ----------------------------------------
// Utils
// ---------------------------------------- */

export { default as StringUtils } from "./utils/StringUtils";
export { default as TreeDataUtils } from "./utils/TreeDataUtils";
export { default as TimeUtils } from "./utils/TimeUtils";
export { default as ObjectUtils } from "./utils/ObjectUtils";
export { default as MapUtils } from "./utils/MapUtils";
export { default as ImageUtils } from "./utils/ImageUtils";

/* ----------------------------------------
// Utils
// ---------------------------------------- */

export { default as useDidUpdate } from "./hooks/useDidUpdate";
export { default as useFirstTime } from "./hooks/useFirstTime";
export { default as useForceUpdate } from "./hooks/useForceUpdate";
export { useForceUpdateConstraint } from "./hooks/useForceUpdate";
export { default as usePrevious } from "./hooks/usePrevious";
