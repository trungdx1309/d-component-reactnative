import ClassNames from "classnames";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { ColorKeyType } from "../../../dist";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import View, { IViewProps } from "../view/View";

export interface ICheckBoxProps extends IViewProps {
  checked?: boolean;
  label?: any;
  color?: ColorKeyType;
  onChange?: (props?: any) => any;
  classNameLabel?: string;
  classNameBox?: string;
  pressEnable?: boolean;
  size?: number;
  iconSize?: number;
  iconName?: string;
  iconColor?: ColorKeyType;
  renderIcon?: ((props: { checked?: boolean }) => Element) | Element;
  style?: ViewStyle;
  styleBox?: ViewStyle;
  styleLabel?: TextStyle;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  className,
  classNameLabel,
  classNameBox,
  checked,
  label,
  onChange,
  pressEnable = true,
  size = 20,
  iconSize = 16,
  iconName = "done",
  iconColor = "light",
  color = "primary",
  renderIcon,
  style,
  styleBox,
  styleLabel,
}) => {
  const wrapperClass = ClassNames("flex-row", className);
  const boxClass = ClassNames(
    `width-${size} height-${size} border border-grey flex-center-y justify-content-center`,
    {
      [`bg-${color}`]: checked,
    },
    classNameBox
  );
  const labelClass = ClassNames("h4 ml-2", classNameLabel);
  let labelContent;
  if (typeof label === "string") {
    labelContent = (
      <Text className={labelClass} style={[{ overflow: "hidden" }, styleLabel]}>
        {label}
      </Text>
    );
  }
  if (React.isValidElement(label)) {
    labelContent = label;
  }

  const renderBox = () => {
    const icon = () => {
      if (renderIcon) {
        if (typeof renderIcon === "function") {
          return renderIcon({ checked });
        }
        return renderIcon;
      }
      return <Icon name={iconName} color={iconColor} size={iconSize} />;
    };
    if (pressEnable) {
      return (
        <TouchableOpacity
          className={boxClass}
          onPress={onChange}
          style={styleBox}
        >
          {checked && icon()}
        </TouchableOpacity>
      );
    }
    return (
      <View className={boxClass} style={styleBox}>
        {checked && icon()}
      </View>
    );
  };

  return (
    <View className={wrapperClass} style={style}>
      {renderBox()}
      {label && labelContent}
    </View>
  );
};

export default CheckBox;
