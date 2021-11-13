import ClassNames from "classnames";
import React from "react";
import DatePicker, { DatePickerProps } from "react-native-datepicker";
import Colors from "../../style/color/_color";
import Sizes from "../../style/size/_size";
import Text from "../text/Text";
import View from "../view/View";

export interface IInputDateProps
  extends Omit<DatePickerProps, "date" | "onDateChange"> {
  value?: DatePickerProps["date"];
  onChange?: DatePickerProps["onDateChange"];
  label?: string;
  classNameLabel?: string;
  className?: string;
  cancelText?: string;
  confirmText?: string;
  variant?: "standard" | "outline" | "icon";
  iconButtonWidth?: number;
}

export interface IInputDateMethod {}

const InputDate: React.ForwardRefRenderFunction<
  IInputDateMethod,
  IInputDateProps
> = ({
  value,
  onChange,
  className,
  classNameLabel,
  label,
  cancelText = "Cancel",
  confirmText = "Confirm",
  variant = "standard",
  customStyles = {},
  iconButtonWidth = 40,
  style,
  ...rest
}) => {
  const hasBorder = variant === "outline";
  const wrapperClass = ClassNames("", `${className}`);
  const labelClass = ClassNames(
    `h5`,
    { "mb-1": hasBorder },
    `${classNameLabel}`
  );
  let contStyle: any = {};
  if (variant !== "icon") {
    contStyle = { ...contStyle, width: "100%" };
  }
  if (variant === "icon") {
    contStyle = { ...contStyle, width: iconButtonWidth };
  }
  if (variant === "outline") {
    contStyle = { ...contStyle, ...styles.borderOutline };
  }
  if (variant === "standard") {
    contStyle = { ...contStyle, ...styles.borderStandard };
  }
  return (
    <View className={wrapperClass}>
      {label && <Text className={labelClass}>{label}</Text>}
      <DatePicker
        date={value}
        onDateChange={onChange}
        cancelBtnText={cancelText}
        confirmBtnText={confirmText}
        customStyles={{
          btnTextConfirm: { color: Colors.primary },
          dateInput: { borderWidth: 0 },
          ...customStyles,
        }}
        hideText={variant === "icon"}
        style={[contStyle, style]}
        {...rest}
      />
    </View>
  );
};

export default React.forwardRef(InputDate);

const styles = {
  borderOutline: {
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  borderStandard: {
    borderColor: Colors.grey,
    borderBottomWidth: Sizes.borderSmall,
  },
};
