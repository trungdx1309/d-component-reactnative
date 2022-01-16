import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import { Icon as IconElement, IconProps } from "react-native-elements";
import { ThemeProps } from "../../interface/iTheme";
import { ColorKeyType } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import Sizes from "../../style/size/_size";
import { getStyleProps } from "../../style/style";
import TouchableOpacity from "../view/TouchableOpacity";

export interface IIconProps
  extends Omit<IconProps, "color">,
    Omit<ThemeProps, "useLightColor"> {
  color?: ColorKeyType;
  className?: string;
  /**
   * className for the TouchableOpacity component wrap outside of the icon,
   * only available when the onPress props has truthy value.
   */
  classNameWrapper?: string;
}

const Icon: React.FC<IIconProps> = ({
  name,
  type = "material",
  style,
  color,
  colorDarkMode,
  size = Sizes.iconSize,
  classNameWrapper,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const colorIcon = useMemo(() => {
    if (isDarkMode && colorDarkMode) {
      return getColorValue(colorDarkMode);
    }
    return getColorValue(color as any);
  }, [color]);
  const icon = (
    <IconElement
      style={[transStyle, style] as any}
      name={name}
      type={type}
      color={colorIcon}
      size={size}
      {...(rest as any)}
    />
  );
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onPressIn}
        colorDarkMode="transparent"
        className={`p-1 rounded-pill ${classNameWrapper}`}
      >
        {icon}
      </TouchableOpacity>
    );
  }

  return icon;
};

export default Icon;
