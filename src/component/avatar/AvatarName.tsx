import ClassNames from "classnames";
import React from "react";
import Text from "../text/Text";
import View from "../view/View";
import Avatar, { IAvatarProps } from "./Avatar";

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
}

const AvatarName: React.FC<IAvatarNameProps> = ({
  user,
  position = "after",
  size = "x-small",
  subLabel,
  className,
  classNameText,
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
    "text-nowrap",
    {
      "size-70": size === "xx-large",
      "size-56": size === "x-large",
      "size-48": size === "large",
      "size-40": size === "medium",
      h0: size === "small",
      h2: size === "x-small",
      "size-12": size === "xx-small",
    },
    classNameText
  );

  const subTextClass = ClassNames({
    "text-large": size === "large",
    "text-medium": size === "medium",
    "text-x-small": size === "small",
    "text-xx-small": size === "x-small" || size === "xx-small",
  });

  const renderName = () => {
    return (
      <View className={nameClass}>
        <Text className={`${nameTextClass}`}>{displayName}</Text>
        {subLabel && (
          <Text
            className={subTextClass}
            style={{ fontSize: size === "x-large" ? 32 : undefined }}
          >
            {subLabel}
          </Text>
        )}
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
