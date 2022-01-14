import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import { Icon as IconElement, IconProps } from "react-native-elements";
import { ThemeProps } from "../../interface/iTheme";
import { ColorKeyType } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import Sizes from "../../style/size/_size";
import { getStyleProps } from "../../style/style";

export interface IIconProps
  extends Omit<IconProps, "color">,
    Omit<ThemeProps, "useLightColor"> {
  className?: string;
  color?: ColorKeyType;
}

const Icon: React.FC<IIconProps> = ({
  name,
  type = "material",
  style,
  color,
  colorDarkMode,
  size = Sizes.iconSize,
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

  return (
    <IconElement
      style={[transStyle, style] as any}
      name={name}
      type={type}
      color={colorIcon}
      size={size}
      {...(rest as any)}
    />
  );
};

export default Icon;
