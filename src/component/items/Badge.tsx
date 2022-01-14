import ClassNames from "classnames";
import React, { useMemo } from "react";
import { ViewStyle } from "react-native";
import { ColorKeyType } from "../../style/constant/AppColors";
import { IAvatarProps } from "../avatar/Avatar";
import Icon from "../icon/Icon";
import View from "../view/View";

export interface IBadgeProps {
  variant?: "dot" | "icon";
  iconName?: string;
  color?: ColorKeyType;
  size?: IAvatarProps["size"];
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  classNameBadge?: string;
  style?: ViewStyle;
  styleBadge?: ViewStyle;
  iconSize?: number;
}

const BADGE_WIDTH_BASE = 10;

const Badge: React.FC<IBadgeProps> = ({
  children,
  variant = "dot",
  iconName = "backup",
  color = "primary",
  size = "small",
  position = "top-right",
  iconSize = 10,
  className,
  classNameBadge,
  style,
  styleBadge,
}) => {
  const widthHeight = useMemo(() => {
    switch (size) {
      case "xx-large":
        return BADGE_WIDTH_BASE + 4;
      case "x-large":
        return BADGE_WIDTH_BASE + 3;
      case "large":
        return BADGE_WIDTH_BASE + 2;
      case "medium":
        return BADGE_WIDTH_BASE + 1;
      case "x-small":
        return BADGE_WIDTH_BASE - 1;
      case "xx-small":
        return BADGE_WIDTH_BASE - 2;
      case "tiny":
        return BADGE_WIDTH_BASE - 3;
      default:
        return BADGE_WIDTH_BASE;
    }
  }, [size]);
  const wrapperClass = ClassNames(
    "position-relative align-self-start",
    className
  );
  const badgeClass = ClassNames(
    `flex-center-y justify-content-center bg-${color} position-absolute rounded-pilled border-1 border-light`,
    {
      "top-6 right-0": position === "top-right",
      "top-6 left-0": position === "top-left",
      "bottom-6 left-0": position === "bottom-left",
      "bottom-6 right-0": position === "bottom-right",
    },
    classNameBadge
  );
  const badgeStyle: ViewStyle[] = [{ width: widthHeight, height: widthHeight }];
  const renderBadge = () => {
    if (variant === "icon") {
      return (
        <View className={badgeClass} style={[badgeStyle, styleBadge]}>
          <Icon name={iconName} size={iconSize} color="light" />
        </View>
      );
    }
    return <View className={badgeClass} style={[badgeStyle, styleBadge]} />;
  };

  return (
    <View className={wrapperClass} style={style}>
      {children}
      {renderBadge()}
    </View>
  );
};

export default Badge;
