import React, { useMemo } from "react";
import { Icon as IconElement, IconProps } from "react-native-elements";
import { getColorValue } from "../../style/modifier";
import Sizes from "../../style/size/_size";
import { getStyleProps } from "../../style/style";

export interface IIconProps extends IconProps {
  className?: string;
}

const Icon: React.FC<IIconProps> = ({
  name,
  type = "material",
  style,
  color,
  size = Sizes.iconSize,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const colorIcon = useMemo(() => getColorValue(color as any), [color]);

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
