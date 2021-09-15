import React from "react";
import { Icon as IconElement, IconProps } from "react-native-elements";
import { getColorValue } from "../../style/modifier";
import { getStyleProps } from "../../style/style";

export interface IIconProps extends IconProps {
  className?: string;
}

const Icon: React.FC<IIconProps> = ({
  name,
  type = "material",
  children,
  style,
  color,
  size = 20,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const colorIcon = getColorValue(color as any);

  return (
    <IconElement
      style={[transStyle, style] as any}
      name={name}
      type={type}
      color={colorIcon}
      size={size}
      {...rest}
    />
  );
};

export default Icon;
