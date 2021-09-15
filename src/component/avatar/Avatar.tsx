import ClassNames from "classnames";
import React from "react";
import Image, { IImageProps } from "../image/Image";
import Text from "../text/Text";
import View from "../view/View";

export interface IAvatarProps extends Omit<IImageProps, "source"> {
  size?:
    | "xx-large"
    | "x-large"
    | "large"
    | "medium"
    | "small"
    | "x-small"
    | "xx-small";
  variant?: "rounded" | "square";
  text?: string;
  color?: string;
  classNameImage?: string;
  classNameLetter?: string;
  source?: IImageProps["source"];
  styleImage?: IImageProps["style"];
}

const Avatar: React.FC<IAvatarProps> = ({
  size = "medium",
  source,
  variant = "rounded",
  className,
  classNameImage,
  classNameLetter,
  text,
  color = "#D8D8D8",
  resizeMode = "cover",
  resizeMethod = "auto",
  style,
  styleImage,
  ...rest
}) => {
  const letterClass = ClassNames(
    "text-white text-center font-weight-bold",
    {
      "size-80": size === "xx-large",
      "size-60": size === "x-large",
      "size-48": size === "large",
      "size-36": size === "medium",
      "size-30": size === "small",
      "size-20": size === "x-small",
      h3: size === "xx-small",
    },
    classNameLetter
  );
  const wrapperClass = ClassNames(
    `position-relative image-square-${size}`,
    {
      "justify-content-center align-items-center": !!text,
      "rounded-pill": variant === "rounded",
    },
    className
  );
  const imageClass = ClassNames("w-100 h-100", {
    "rounded-pill": variant === "rounded",
  });
  let content;

  if (text) {
    const firstLetter = text.charAt(0);
    content = <Text className={letterClass}>{firstLetter}</Text>;
  }
  if (source) {
    content = (
      <Image
        source={source}
        className={imageClass}
        resizeMode={resizeMode}
        resizeMethod={resizeMethod}
        style={styleImage}
        {...rest}
      />
    );
  }
  return (
    <View className={wrapperClass} style={[{ backgroundColor: color }, style]}>
      {content}
    </View>
  );
};

export default Avatar;