import ClassNames from "classnames";
import React, { useState, useEffect, useMemo } from "react";
import {
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  useColorScheme,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Text from "../text/Text";
import View from "../view/View";
import { getStyleProps } from "../../style/style";
import Icon from "../icon/Icon";
import Colors from "../../style/constant/AppColors";
import Sizes from "../../style/size/_size";
import useKeyBoard from "../../hooks/useKeyboard";

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
  style?: ViewStyle;
  styleInput?: StyleProp<TextStyle>;
  onPressIcon?: (props?: any) => any;
  useKeyboardAvoidingView?: boolean;
}

export interface IInputTextMethod {}

export interface IInputErrorViewProps {
  error: any;
  className?: string;
  iconName?: string;
  iconSize?: number;
  classNameText?: string;
}

export const InputErrorView: React.FC<IInputErrorViewProps> = ({
  error,
  className,
  classNameText,
  iconName = "info",
  iconSize = 12,
}) => {
  const errorClass = ClassNames("flex-center-y", className);
  const textClass = ClassNames("text-error h5 ml-1", classNameText);

  return (
    <View className={errorClass}>
      <Icon name={iconName} size={iconSize} color="error" />
      <Text className={textClass}>{error}</Text>
    </View>
  );
};

const InputText: React.ForwardRefRenderFunction<
  IInputTextMethod,
  IInputTextProps
> = (
  {
    variant = "standard",
    error,
    label,
    height = Sizes.inputHeight,
    className,
    classNameInput,
    classNameWrapper,
    classNameLabel,
    classNameError,
    style,
    styleInput,
    onBlur,
    onFocus,
    iconName,
    onPressIcon,
    useKeyboardAvoidingView,
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
    "flex-center-y justify-content-center",
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
  const inputClass = ClassNames(
    "flex-1 px-2 h4",
    { "py-2": Platform.OS === "android" },
    classNameInput
  );
  const errorClass = ClassNames(
    "mt-1",
    {
      "px-2": variant === "pill",
    },
    classNameError
  );

  const { isKeyboardShow, heightKeyboard } = useKeyBoard(false);
  const bottomPadding = useMemo(() => {
    if (!useKeyboardAvoidingView || !focusing) {
      return undefined;
    }
    if (!isKeyboardShow) {
      return 0;
    }
    return Platform.OS === "ios" ? heightKeyboard - 50 : heightKeyboard;
  }, [heightKeyboard, isKeyboardShow, focusing]);

  const content = (
    <View
      className={containerClass}
      key={label}
      style={[
        {
          paddingBottom: bottomPadding,
        },
        style,
      ]}
    >
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
            { height, color: isDarkMode ? light : undefined },
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
      {error && <InputErrorView error={error} className={errorClass} />}
    </View>
  );

  // if (useKeyboardAvoidingView && focusing) {
  //   return (
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === "ios" ? "padding" : "height"}
  //     >
  //       {content}
  //     </KeyboardAvoidingView>
  //   );
  // }

  return content;
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
