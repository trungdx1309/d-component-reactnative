import ClassNames from "classnames";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { isDark } from "../../style/color/_color";
import AppSizes from "../../style/constant/AppSizes";
import { getColorValue } from "../../style/modifier";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import { ColorKeyType } from "../../style/constant/AppColors";

export interface IButtonProps extends TouchableOpacityProps {
  className?: string;
  classNameLabel?: string;
  children?: any;
  size?: "large" | "medium" | "small" | "x-small" | "auto" | "fit-content";
  variant?: "standard" | "outline" | "trans";
  shape?: "square" | "pill" | "rounded";
  color?: ColorKeyType;
  textColor?: string;
  iconName?: string;
  iconSize?: number;
  suffixIcon?: string;
  suffixElement?: any;
  prefixElement?: any;
  label?: string;
  height?: number | string;
}

const Button: React.FC<IButtonProps> = ({
  className,
  classNameLabel,
  color = "primary",
  variant = "standard",
  size = "large",
  shape = "square",
  children,
  iconName,
  iconSize = 14,
  height = AppSizes.inputHeight,
  suffixIcon,
  suffixElement,
  prefixElement,
  label,
  disabled,
  style,
  textColor,
  ...rest
}) => {
  const buttonColor = getColorValue(color);
  const isIconButton =
    !!iconName || !!suffixIcon || suffixElement || prefixElement;

  const wrapperClass = ClassNames(
    "flex-center-y justify-content-center px-3",
    {
      [`bg-${color}`]: variant === "standard",
      [`border border-${color}`]: variant === "outline",
      "rounded-pill": shape === "pill",
      "rounded-2": shape === "rounded",
      "bg-disabled": disabled,
    },
    className
  );
  const labelClass = ClassNames(
    "text-center",
    {
      [`text-${color}`]: variant === "outline" || variant === "trans",
      "text-white": variant === "standard" && isDark(buttonColor),
    },
    classNameLabel
  );

  const getIconColor = () => {
    if (variant === "standard" && isDark(buttonColor)) {
      return "light";
    }
    if (variant === "standard" && !isDark(buttonColor)) {
      return "dark";
    }
    return buttonColor;
  };

  let mainView;
  let content = children;
  let suffixView;
  let prefixView;

  if (label) {
    content = label;
  }

  if (typeof content === "string") {
    mainView = (
      <Text className={labelClass} color={textColor}>
        {content}
      </Text>
    );
  }

  if (React.isValidElement(content)) {
    mainView = content;
  }

  if (iconName) {
    prefixView = (
      <Icon
        name={iconName}
        color={getIconColor()}
        size={iconSize}
        className="mr-2"
      />
    );
  }

  return (
    <TouchableOpacity
      className={wrapperClass}
      style={[{ height }, style]}
      disabled={disabled}
      {...rest}
    >
      {prefixView}
      {mainView}
      {suffixView}
    </TouchableOpacity>
  );
};

export default Button;
