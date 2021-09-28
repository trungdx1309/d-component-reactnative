import React, { useMemo } from "react";
import ClassNames from "classnames";
import Text from "../text/Text";
import View from "../view/View";
import { ColorKeyType } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import { isDark } from "../../style/color/_color";
import Icon from "../icon/Icon";

export interface IChipProps {
  label?: string;
  className?: string;
  color?: ColorKeyType;
  size?: "small" | "medium" | "large";
  iconName?: string;
  onPressIcon?: any;
}

const Chip: React.FC<IChipProps> = ({
  label,
  className,
  color = "primary",
  size = "small",
  iconName,
  onPressIcon,
}) => {
  const wrapperClass = ClassNames(
    `bg-${color} flex-center-y`,
    { "px-2 py-1": size === "small" },
    className
  );
  const chipColor = getColorValue(color);
  const textColor = isDark(chipColor) ? "white" : "dark";
  const iconSize = useMemo(() => {
    switch (size) {
      case "large":
        return 22;
      case "medium":
        return 18;
      default:
        return 14;
    }
  }, [size]);

  return (
    <View className={wrapperClass}>
      {label && (
        <Text className="h5" style={{ color: textColor }}>
          {label}
        </Text>
      )}
      {iconName && (
        <Icon
          name={iconName}
          color={textColor}
          size={iconSize}
          className="ml-1"
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default Chip;
