import _pt from "prop-types";
import ClassNames from "classnames";
import React from "react";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import TouchableOpacity from "../view/TouchableOpacity";
import View from "../view/View";

const CheckBox = ({
  className,
  classNameLabel,
  classNameBox,
  checked,
  label,
  onChange
}) => {
  const wrapperClass = ClassNames("flex-row", className);
  const boxClass = ClassNames("width-14 height-14 border border-grey", {
    "bg-primary": checked
  }, classNameBox);
  const labelClass = ClassNames("h4 ml-2", classNameLabel);
  let labelContent;

  if (typeof label === "string") {
    labelContent = <Text className={labelClass} style={{
      overflow: "hidden"
    }}>
        {label}
      </Text>;
  }

  if (React.isValidElement(label)) {
    labelContent = label;
  }

  return <View className={wrapperClass}>
      <TouchableOpacity className={boxClass} onPress={onChange}>
        {checked && <Icon name="done" color="light" size={14} />}
      </TouchableOpacity>
      {label && labelContent}
    </View>;
};

CheckBox.propTypes = {
  checked: _pt.bool,
  label: _pt.any,
  onChange: _pt.func,
  classNameLabel: _pt.string,
  classNameBox: _pt.string
};
export default CheckBox;