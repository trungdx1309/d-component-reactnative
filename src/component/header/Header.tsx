import React from "react";
import ClassNames from "classnames";
import Text from "../text/Text";
import View from "../view/View";
import Button, { IButtonProps } from "../button/Button";
import TouchableOpacity from "../view/TouchableOpacity";
import Icon from "../icon/Icon";
import { getColorValue } from "../../style/modifier";
import { isDark } from "../../style/color/_color";

export interface IHeaderProps {
  title?: string;
  onLeftPress?: (props?: any) => any;
  onRightPress?: (props?: any) => any;
  customLeft?: ((props?: any) => Element) | Element;
  customRight?: ((props?: any) => Element) | Element;
  leftIcon?: string;
  leftText?: string;
  rightIcon?: string;
  rightText?: string;
  color?: IButtonProps["color"];
  className?: string;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  onLeftPress,
  onRightPress,
  customLeft,
  customRight,
  leftIcon = "arrow-back",
  leftText,
  rightIcon = "more-horiz",
  rightText,
  color = "primary",
  className,
}) => {
  const bgColor = getColorValue(color);
  const wrapperClass = ClassNames(
    `flex-center-y px-2 py-3 bg-${color}`,
    className
  );
  const titleClass = ClassNames(
    "flex-1 h3 font-weight-bold text-center text-white",
    {
      "text-dark": !isDark(bgColor),
    }
  );

  const getTextColor = () => {
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
      <Icon
        name={leftIcon}
        color={getTextColor()}
        className="px-0"
        onPress={onLeftPress}
      />
    );
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
      <Icon
        name={rightIcon}
        color={getTextColor()}
        className="px-0"
        onPress={onRightPress}
      />
    );
  };

  return (
    <View className={wrapperClass}>
      {onLeftPress && renderLeft()}
      {title && <Text className={titleClass}>{title}</Text>}
      {onRightPress && renderRight()}
    </View>
  );
};

export default Header;
