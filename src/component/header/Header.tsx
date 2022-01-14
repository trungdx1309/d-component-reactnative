import React from "react";
import ClassNames from "classnames";
import { useColorScheme, StyleProp, ViewStyle } from "react-native";
import Text from "../text/Text";
import View from "../view/View";
import Button from "../button/Button";
import TouchableOpacity from "../view/TouchableOpacity";
import Icon from "../icon/Icon";
import { getColorValue } from "../../style/modifier";
import { isDark } from "../../style/color/_color";
import InputSearch from "../input/InputSearch";
import { ColorKeyType } from "../../style/constant/AppColors";
import { ThemeProps } from "../../interface/iTheme";

export interface IHeaderProps extends ThemeProps {
  title?: string;
  onLeftPress?: (props?: any) => any;
  onRightPress?: (props?: any) => any;
  customLeft?: ((props?: any) => Element) | Element;
  customRight?: ((props?: any) => Element) | Element;
  customTitle?: ((props?: any) => Element) | Element;
  leftIcon?: string;
  leftText?: string;
  rightIcon?: string;
  rightText?: string;
  theme?: ColorKeyType;
  className?: string;
  classNameSearch?: string;
  showSearch?: boolean;
  size?: "medium" | "large" | "small";
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  onLeftPress,
  onRightPress,
  customLeft,
  customRight,
  customTitle,
  leftIcon = "arrow-back",
  leftText,
  rightIcon = "more-horiz",
  rightText,
  theme,
  size = "medium",
  className,
  classNameSearch,
  showSearch,
  colorDarkMode,
  style,
}) => {
  const isDarkMode = useColorScheme() === "dark";
  const bgColor = isDarkMode
    ? colorDarkMode || getColorValue(theme as any)
    : getColorValue(theme as any);
  const wrapperClass = ClassNames(
    `flex-center-y px-2 bg-${theme}`,
    {
      "py-2": showSearch || size === "medium",
      "py-3": size === "large",
      "py-1": size === "small",
    },
    className
  );
  const titleClass = ClassNames("flex-1 font-weight-bold text-center", {
    "text-dark": theme && !isDark(bgColor),
    "text-white": theme && isDark(bgColor),
    h5: size === "small",
    h4: size === "medium",
    h3: size === "large",
  });

  const headerStyle: Array<any> = [];

  if (style) {
    headerStyle.push(style);
  }

  const searchClass = ClassNames("flex-1 mx-3", classNameSearch);

  const getTextColor = () => {
    if (!theme) {
      if (isDarkMode) {
        return "light";
      }
      return "dark";
    }
    if (isDark(bgColor)) {
      return "light";
    }
    return "dark";
  };

  const renderLeft = () => {
    if (customLeft) {
      if (typeof customLeft === "function") {
        return customLeft();
      }
      return customLeft;
    }
    if (leftText) {
      return (
        <Button
          className="px-0"
          height="auto"
          variant="trans"
          color={getTextColor()}
          onPress={onLeftPress}
          label={leftText}
        />
      );
    }
    return (
      <TouchableOpacity onPress={onLeftPress} className="px-3">
        <Icon name={leftIcon} color={getTextColor()} className="px-0" />
      </TouchableOpacity>
    );
  };

  const renderCenter = () => {
    if (customTitle) {
      if (typeof customTitle === "function") {
        return customTitle();
      }
      return customTitle;
    }
    if (showSearch) {
      return <InputSearch className={searchClass} />;
    }
    if (title) {
      return <Text className={titleClass}>{title}</Text>;
    }
    return <View className="flex-1" />;
  };

  const renderRight = () => {
    if (customRight) {
      if (typeof customRight === "function") {
        return customRight();
      }
      return customRight;
    }
    if (rightText) {
      return (
        <Button
          className="px-0"
          height="auto"
          variant="trans"
          color={getTextColor()}
          onPress={onRightPress}
          label={rightText}
        />
      );
    }
    return (
      <TouchableOpacity onPress={onRightPress}>
        <Icon name={rightIcon} color={getTextColor()} className="px-0" />
      </TouchableOpacity>
    );
  };

  return (
    <View
      className={wrapperClass}
      style={headerStyle}
      colorDarkMode={colorDarkMode}
    >
      {(onLeftPress || customLeft) && renderLeft()}
      {renderCenter()}
      {(onRightPress || customRight) && renderRight()}
    </View>
  );
};

export default Header;
