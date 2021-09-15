import _pt from "prop-types";
import ClassNames from "classnames";
import React from "react";
import { isDark } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";

const Button = ({
  className,
  classNameLabel,
  color = "primary",
  variant = "standard",
  size = "large",
  shape = "square",
  children,
  iconName,
  iconSize = 14,
  suffixIcon,
  suffixElement,
  prefixElement,
  label,
  disabled,
  ...rest
}) => {
  const buttonColor = getColorValue(color);
  const isIconButton = !!iconName || !!suffixIcon || suffixElement || prefixElement;
  const wrapperClass = ClassNames("flex-center-y justify-content-center px-3", {
    [`bg-${color}`]: variant === "standard",
    [`border border-${color}`]: variant === "outline",
    "rounded-pill": shape === "pill",
    "rounded-2": shape === "rounded",
    "bg-disabled": disabled
  }, className);
  const labelClass = ClassNames("text-center", {
    [`text-${color}`]: variant === "outline" || variant === "trans",
    "text-white": variant === "standard" && isDark(buttonColor)
  }, classNameLabel);

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
    mainView = <Text className={labelClass}>{content}</Text>;
  }

  if (React.isValidElement(content)) {
    mainView = content;
  }

  if (iconName) {
    prefixView = <Icon name={iconName} color={getIconColor()} size={iconSize} className="mr-2" />;
  }

  return <TouchableOpacity className={wrapperClass} style={{
    height: 40
  }} disabled={disabled} {...rest}>
      {prefixView}
      {mainView}
      {suffixView}
    </TouchableOpacity>;
};

Button.propTypes = {
  className: _pt.string,
  classNameLabel: _pt.string,
  children: _pt.any,
  size: _pt.oneOf(["large", "medium", "small", "x-small", "auto", "fit-content"]),
  variant: _pt.oneOf(["standard", "outline", "trans"]),
  shape: _pt.oneOf(["square", "pill", "rounded"]),
  color: _pt.oneOf(["primary", "secondary", "green", "red", "yellow", "blue", "gray", "dark", "light", "error", "success", "warning", "muted"]),
  iconName: _pt.string,
  iconSize: _pt.number,
  suffixIcon: _pt.string,
  suffixElement: _pt.any,
  prefixElement: _pt.any,
  label: _pt.string
};
export default Button;