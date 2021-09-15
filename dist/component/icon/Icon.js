import _pt from "prop-types";
import React from "react";
import { Icon as IconElement } from "react-native-elements";
import { getColorValue } from "../../style/modifier";
import { getStyleProps } from "../../style/style";

const Icon = ({
  name,
  type = "material",
  children,
  style,
  color,
  size = 20,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const colorIcon = getColorValue(color);
  return <IconElement style={[transStyle, style]} name={name} type={type} color={colorIcon} size={size} {...rest} />;
};

Icon.propTypes = {
  className: _pt.string
};
export default Icon;