import ClassNames from "classnames";
import React, { useImperativeHandle, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import DatePicker, { DatePickerProps } from "react-native-date-picker";
import _ from "lodash";
import { getThemeColor } from "../../style/modifier";
import Sizes from "../../style/size/_size";
import TimeUtils from "../../utils/TimeUtils";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import View from "../view/View";
import { InputErrorView } from "./InputText";

export type TDateFormat =
  | "DD/MM/YYYY HH:mm"
  | "DD/MM/YYYY"
  | "MM/YYYY"
  | "YYYY"
  | "HH:mm"
  | "HH:mm:";

export interface ICustomInputProps {
  value: any;
  displayValue: any;
}

export interface IInputDateProps
  extends Omit<DatePickerProps, "date" | "onDateChange"> {
  value?: DatePickerProps["date"];
  format?: TDateFormat;
  onChange?: DatePickerProps["onDateChange"];
  label?: string;
  classNameLabel?: string;
  classNameText?: string;
  className?: string;
  classNameError?: string;
  cancelText?: string;
  confirmText?: string;
  variant?: "standard" | "outline" | "icon" | "pill" | "rounded" | "trans";
  placeholder?: string;
  error?: any;
  height?: number;
  showIcon?: boolean;
  iconName?: string;
  customIcon?: ((value: any) => Element) | Element;
  customInput?: ((props: ICustomInputProps) => Element) | Element;
  disabled?: boolean;
}

export interface IInputDateMethod {
  open: () => any;
  close: () => any;
}

const InputDate: React.ForwardRefRenderFunction<
  IInputDateMethod,
  IInputDateProps
> = (
  {
    value,
    onChange,
    className,
    classNameLabel,
    classNameText,
    classNameError,
    label,
    height = Sizes.inputHeight,
    cancelText = "Cancel",
    confirmText = "Confirm",
    variant = "standard˝",
    format,
    style,
    placeholder,
    error,
    showIcon = true,
    iconName = "today",
    mode,
    disabled,
    customInput,
    customIcon,
    ...rest
  },
  ref
) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const hasBorder =
    variant === "outline" || variant === "pill" || variant === "rounded";
  const wrapperClass = ClassNames(
    // { "width-40": variant === "icon" },
    `${className}`
  );
  const labelClass = ClassNames(
    `h4`,
    { "mb-1": hasBorder },
    `${classNameLabel}`
  );
  const textClass = ClassNames(
    "h4 flex-1",
    {
      "text-gray": !value || disabled,
    },
    classNameText
  );
  const contentClass = ClassNames("flex-center-y px-2", {
    border: hasBorder,
    "border-bottom-1": variant === "standard",
    "rounded-pill": variant === "pill",
    "rounded-1": variant === "rounded",
    "border-error": !!error,
    [`border-${getThemeColor({ colorScheme })}`]: !!value,
  });

  const errorClass = ClassNames(
    "mt-1",
    {
      "px-2": variant === "pill",
    },
    classNameError
  );

  const [openDateModal, setOpenDateModal] = useState(false);

  const displayValue = useMemo(() => {
    if (!value) {
      return undefined;
    }
    let res;
    switch (mode) {
      case "datetime":
        res = TimeUtils.convertMiliToDateTime(value);
        break;
      case "time":
        res = TimeUtils.convertMiliToTime(value);
        break;
      default:
        res = TimeUtils.convertMiliToDate(value);
        break;
    }
    if (format) {
      res = TimeUtils.convertMiliToDateWithFormat(value, format);
    }
    return res;
  }, [value, onChange]);

  useImperativeHandle(ref, () => ({
    open: () => setOpenDateModal(true),
    close: () => setOpenDateModal(false),
  }));

  const renderIcon = () => {
    if (customIcon) {
      if (typeof customIcon === "function") {
        return customIcon(value);
      }
      return customIcon;
    }
    return (
      <Icon name={iconName} color={!value ? "gray" : undefined} size={20} />
    );
  };

  const renderContent = () => {
    if (customInput) {
      if (typeof customInput === "function") {
        return customInput({ value, displayValue });
      }
      return customInput;
    }
    if (variant === "icon") {
      return renderIcon();
    }
    return (
      <View className={contentClass} style={{ height }}>
        <Text className={textClass}>{displayValue || placeholder}</Text>
        {(showIcon || customIcon) && renderIcon()}
      </View>
    );
  };

  return (
    <View className={wrapperClass} colorDarkMode="transparent">
      {label && <Text className={labelClass}>{label}</Text>}
      <TouchableOpacity
        onPress={() => setOpenDateModal(true)}
        disabled={disabled}
        colorDarkMode="transparent"
      >
        {renderContent()}
      </TouchableOpacity>
      {error && <InputErrorView error={error} className={errorClass} />}
      <DatePicker
        modal
        open={openDateModal}
        onConfirm={(date) => {
          setOpenDateModal(false);
          onChange && onChange(date);
        }}
        onCancel={() => setOpenDateModal(false)}
        date={value || new Date()}
        onDateChange={onChange as any}
        cancelText={cancelText}
        confirmText={confirmText}
        style={style}
        focusable
        {...rest}
        mode={mode}
        timeZoneOffsetInMinutes={420}
        textColor={isDarkMode ? "white" : undefined}
      />
    </View>
  );
};

export default React.forwardRef(InputDate);
