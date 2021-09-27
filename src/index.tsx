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
// List
// ---------------------------------------- */

export type { IAwesomeListProps } from "./component/list/awesomeList/AwesomeList";
export { default as AwesomeList } from "./component/list/awesomeList/AwesomeList";
export { default as AwesomeListMode } from "./component/list/awesomeList/AwesomeListMode";
export { default as EmptyView } from "./component/list/awesomeList/EmptyView";

/* ----------------------------------------
// Header
// ---------------------------------------- */

export type { IHeaderProps } from "./component/header/Header";
export { default as Header } from "./component/header/Header";

/* ----------------------------------------
// Modal
// ---------------------------------------- */

export type { IModalProps, IModalTransProps } from "./component/modal/Modal";
export { default as Modal, ModalTrans } from "./component/modal/Modal";

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

export type { IImageViewerModalProps } from "./component/image/ImageViewerModal";
export { default as ImageViewerModal } from "./component/image/ImageViewerModal";

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
// Calendar
// ---------------------------------------- */

export type { ICalendarProps } from "./component/calendar/Calendar";
export { default as Calendar } from "./component/calendar/Calendar";

export type { IModalCalendarProps } from "./component/calendar/ModalCalendar";
export { default as ModalCalendar } from "./component/calendar/ModalCalendar";

/* ----------------------------------------
// Style
// ---------------------------------------- */

export { default as Colors } from "./style/color/_color";
export { default as Scheme } from "./style/color/_scheme";
export { default as AppSizes } from "./style/constant/AppSizes";
export { default as AppColors } from "./style/constant/AppColors";
export type { ColorKeyType } from "./style/constant/AppColors";
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

export type { IUseKeyboard } from "./hooks/useKeyboard";

export { default as useDidUpdate } from "./hooks/useDidUpdate";
export { default as useFirstTime } from "./hooks/useFirstTime";
export { default as useForceUpdate } from "./hooks/useForceUpdate";
export { useForceUpdateConstraint } from "./hooks/useForceUpdate";
export { default as usePrevious } from "./hooks/usePrevious";
export { default as useKeyboard } from "./hooks/useKeyboard";
