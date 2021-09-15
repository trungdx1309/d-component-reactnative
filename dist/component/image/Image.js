import _pt from "prop-types";
import React from "react";
import { Image as ImageRN } from "react-native";
import { getStyleProps } from "../../style/style";

const Image = ({
  style,
  children,
  source,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  return <ImageRN style={[transStyle, style]} source={source} />;
};

Image.propTypes = {
  className: _pt.string
};
export default Image;