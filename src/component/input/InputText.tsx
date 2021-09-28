import ClassNames from "classnames";
import React, { useState } from "react";
import {
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  useColorScheme,
} from "react-native";
import Text from "../text/Text";
import View from "../view/View";
import { getStyleProps } from "../../style/style";
import Icon from "../icon/Icon";
import AppSizes from "../../style/constant/AppSizes";
import Colors from "../../style/color/_color";

const { light } = Colors;
export interface IInputTextProps extends TextInputProps {
  variant?: "standard" | "outline" | "rounded" | "pill" | "trans";
  label?: any;
  error?: any;
  height?: number;
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  classNameInput?: string;
  classNameError?: string;
  iconName?: string;
  styleInput?: StyleProp<TextStyle>;
  onPressIcon?: (props?: any) => any;
}

export interface IInputTextMethod {}

const InputText: React.ForwardRefRenderFunction<
  IInputTextMethod,
  IInputTextProps
> = (
  {
    variant = "standard",
    error,
    label,
    height = AppSizes.inputHeight,
    className,
    classNameInput,
    classNameWrapper,
    classNameLabel,
    classNameError,
    styleInput,
    onBlur,
    onFocus,
    iconName,
    onPressIcon,
    ...rest
  },
  ref
) => {
  const isDarkMode = useColorScheme() === "dark";
  const [focusing, setFocusing] = useState(false);
  const hasBorder =
    variant === "outline" || variant === "pill" || variant === "rounded";

  const containerClass = ClassNames(`w-100`, `${className}`);
  const labelClass = ClassNames(
    `h5`,
    {
      "mb-1": hasBorder,
      "font-weight-bold": focusing,
    },
    `${classNameLabel}`
  );
  const wrapperClass = ClassNames(
    "flex-center-y",
    {
      border: hasBorder,
      "border-bottom-1": variant === "standard",
      "rounded-pill": variant === "pill",
      "rounded-1": variant === "rounded",
      "border-primary": focusing,
      "border-error": !!error,
      "px-1": variant === "pill",
    },
    classNameWrapper
  );
  const inputClass = ClassNames("px-1", {}, classNameInput);
  const errorClass = ClassNames(
    "mt-1 flex-center-y",
    {
      "px-2": variant === "pill",
    },
    classNameError
  );

  return (
    <View className={containerClass}>
      {label && <Text className={labelClass}>{label}</Text>}
      <View className={wrapperClass}>
        <TextInput
          className={inputClass}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setFocusing(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setFocusing(false);
          }}
          {...rest}
          style={[
            { height, flex: 1, color: isDarkMode ? light : undefined },
            styleInput,
          ]}
        />
        {iconName && (
          <Icon
            name={iconName}
            color={
              // eslint-disable-next-line no-nested-ternary
              focusing
                ? error
                  ? "error"
                  : "primary"
                : error
                ? "error"
                : "grey"
            }
            type="material"
            size={20}
            className="mr-1"
            onPress={onPressIcon}
          />
        )}
      </View>
      {error && (
        <View className={errorClass}>
          <Icon name="info" size={12} color="error" />
          <Text className="text-error h5 ml-1">{error}</Text>
        </View>
      )}
    </View>
  );
};

export default React.forwardRef(InputText);

export interface ITextInputProps extends TextInputProps {
  className?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  style,
  children,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  return <RNTextInput style={[transStyle, style]} {...rest} />;
};
