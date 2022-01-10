import ClassNames from "classnames";
import React, { useMemo } from "react";
import { TouchableOpacityProps, useColorScheme } from "react-native";
import { isDark } from "../../style/color/_color";
import Sizes from "../../style/size/_size";
import { getColorValue } from "../../style/modifier";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import { ColorKeyType } from "../../style/constant/AppColors";
import { ThemeProps } from "../../interface/iTheme";

const defaultButtonHeight = Sizes?.buttonHeight ?? 30;

export interface IButtonProps
  extends TouchableOpacityProps,
    Omit<ThemeProps, "useLightColor"> {
  className?: string;
  classNameLabel?: string;
  children?: any;
  size?: "large" | "medium" | "small" | "x-small" | "x-large" | "xx-large";
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
  size = "medium",
  shape = "square",
  children,
  iconName,
  iconSize = 14,
  height,
  suffixIcon,
  suffixElement,
  prefixElement,
  label,
  disabled,
  style,
  colorDarkMode,
  textColor,
  ...rest
}) => {
  const isDarkMode = useColorScheme() === "dark";
  const buttonColor = useMemo(() => {
    return getColorValue(color);
  }, [color]);

  const buttonHeight = useMemo(() => {
    let result: number | string = 10;
    switch (size) {
      case "xx-large":
        result = defaultButtonHeight + 15;
        break;
      case "x-large":
        result = defaultButtonHeight + 10;
        break;
      case "large":
        result = defaultButtonHeight + 5;
        break;
      case "medium":
        result = defaultButtonHeight;
        break;
      case "small":
        result = defaultButtonHeight - 5;
        break;
      case "x-small":
        result = defaultButtonHeight - 10;
        break;

      default:
        break;
    }
    if (height) {
      result = height;
    }
    return result;
  }, [height, size]);

  const buttonStyle: Array<any> = [{ height: buttonHeight }];

  if (style) {
    buttonStyle.push(style);
  }

  if (colorDarkMode && isDarkMode) {
    buttonStyle.push({ backgroundColor: colorDarkMode });
  }

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
      h3: size === "x-large" || size === "xx-large",
      h4: size === "medium" || size === "large",
      "h5 text-height-14": size === "small" || size === "x-small",
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
      <Text className={labelClass} color={textColor} numberOfLines={1}>
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
      style={buttonStyle}
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
