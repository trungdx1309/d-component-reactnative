import ClassNames from "classnames";
import React from "react";
import Text from "../text/Text";
import View from "../view/View";
import Avatar, { IAvatarProps } from "./Avatar";
import { IButtonProps } from "../button/Button";

export interface IUserBasic {
  fullName?: string;
  avatar?: IAvatarProps["avatar"];
  name?: string;
  [key: string]: any;
}

export interface IAvatarNameProps {
  user: IUserBasic;
  position?: "before" | "after";
  size?: IAvatarProps["size"];
  subLabel?: string;
  className?: string;
  classNameText?: string;
  classNameSubText?: string;
  color?: IButtonProps["color"];
}

const AvatarName: React.FC<IAvatarNameProps> = ({
  user,
  position = "after",
  size = "x-small",
  subLabel,
  className,
  classNameText,
  classNameSubText,
  color,
}) => {
  const { avatar, fullName, name = "" } = user;
  let displayName = name;
  if (fullName) {
    displayName = fullName;
  }

  const wrapperClass = ClassNames(`flex-row align-center`, className);
  const nameClass = ClassNames("flex-column", {
    "mr-1": position === "before",
    "ml-1": position === "after",
  });
  const nameTextClass = ClassNames(
    `text-nowrap text-${color}`,
    {
      "size-60": size === "xx-large",
      "size-50": size === "x-large",
      "size-40": size === "large",
      "size-32": size === "medium",
      "h1 font-weight-500": size === "small",
      "h3 font-weight-500": size === "x-small",
      "size-12": size === "xx-small",
    },
    classNameText
  );

  const subTextClass = ClassNames(
    `text-gray`,
    {
      "size-50": size === "xx-large",
      "size-40": size === "x-large",
      "size-30": size === "large",
      "size-24": size === "medium",
      "h4 font-weight-400": size === "small",
      "size-10": size === "x-small",
      "size-9": size === "xx-small",
    },
    classNameSubText
  );

  const renderName = () => {
    return (
      <View className={nameClass}>
        <Text className={`${nameTextClass}`}>{displayName}</Text>
        {subLabel && <Text className={subTextClass}>{subLabel}</Text>}
      </View>
    );
  };
  return (
    <View className={wrapperClass}>
      {position === "before" && renderName()}
      {avatar && <Avatar avatar={avatar as any} size={size} />}
      {!avatar && <Avatar text={displayName.charAt(0)} size={size} />}
      {position === "after" && renderName()}
    </View>
  );
};

export default AvatarName;
