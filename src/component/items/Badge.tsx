import ClassNames from "classnames";
import React, { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { ThemeProps } from "../../interface/iTheme";
import { ColorKeyType } from "../../style/constant/AppColors";
import { IAvatarProps } from "../avatar/Avatar";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import View from "../view/View";

export interface IBadgeProps extends ThemeProps {
  variant?: "dot" | "icon" | "label";
  iconName?: string;
  color?: ColorKeyType;
  size?: IAvatarProps["size"];
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  classNameLabel?: string;
  classNameBadge?: string;
  style?: ViewStyle;
  styleBadge?: ViewStyle;
  styleLabel?: TextStyle;
  iconSize?: number;
  badgeSize?: number;
  label?: string;
}

const BADGE_WIDTH_BASE = 10;

const Badge: React.FC<IBadgeProps> = ({
  children,
  variant = "dot",
  iconName = "backup",
  color = "primary",
  colorDarkMode = "transparent",
  useLightColor,
  size = "small",
  position = "top-right",
  iconSize = 10,
  badgeSize,
  className,
  classNameLabel,
  classNameBadge,
  style,
  styleBadge,
  styleLabel,
  label,
}) => {
  const widthHeight = useMemo(() => {
    if (badgeSize && typeof badgeSize === "number") {
      return badgeSize;
    }
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
  }, [size, badgeSize]);
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
    if (variant === "label" && typeof label === "string") {
      return (
        <View className={badgeClass} style={[badgeStyle, styleBadge]}>
          <Text
            className={`font-weight-bold ${classNameLabel}`}
            style={[{ fontSize: 6, color: "white" }, styleLabel]}
          >
            {label}
          </Text>
        </View>
      );
    }
    return <View className={badgeClass} style={[badgeStyle, styleBadge]} />;
  };

  return (
    <View
      className={wrapperClass}
      style={style}
      colorDarkMode={colorDarkMode}
      useLightColor={useLightColor}
    >
      {children}
      {renderBadge()}
    </View>
  );
};

export default Badge;
