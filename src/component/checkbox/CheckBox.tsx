import ClassNames from "classnames";
import React from "react";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import View, { IViewProps } from "../view/View";

export interface ICheckBoxProps extends IViewProps {
  checked?: boolean;
  label?: any;
  onChange?: (props?: any) => any;
  classNameLabel?: string;
  classNameBox?: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  className,
  classNameLabel,
  classNameBox,
  checked,
  label,
  onChange,
}) => {
  const wrapperClass = ClassNames("flex-row", className);
  const boxClass = ClassNames(
    "width-15 height-15 border border-grey",
    {
      "bg-primary": checked,
    },
    classNameBox
  );
  const labelClass = ClassNames("h4 ml-2", classNameLabel);
  let labelContent;
  if (typeof label === "string") {
    labelContent = (
      <Text className={labelClass} style={{ overflow: "hidden" }}>
        {label}
      </Text>
    );
  }
  if (React.isValidElement(label)) {
    labelContent = label;
  }

  return (
    <View className={wrapperClass}>
      <TouchableOpacity className={boxClass} onPress={onChange}>
        {checked && <Icon name="done" color="light" size={14} />}
      </TouchableOpacity>
      {label && labelContent}
    </View>
  );
};

export default CheckBox;
