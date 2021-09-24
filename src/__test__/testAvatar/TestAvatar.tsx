import React from "react";
import Avatar from "../../component/avatar/Avatar";
import View from "../../component/view/View";
import images from "../testImage/Images";
import AvatarName from "../../component/avatar/AvatarName";

export interface ITestAvatarProps {
  [key: string]: any;
}

const TestAvatar: React.FC<ITestAvatarProps> = ({ id }) => {
  const imageType = typeof images.birthdayCake;
  console.log({ imageType });
  return (
    <View>
      <View>
        <Avatar
          text="T"
          size="xx-small"
          className="my-2"
          showBorder
          borderColor="blue"
        />
        <Avatar text="T" size="x-small" className="my-2" />
        <Avatar text="T" size="small" className="my-2" />
        <Avatar text="T" size="medium" className="my-2" />
        <Avatar text="T" size="large" className="my-2" />
        <Avatar text="T" size="x-large" className="my-2" />
        <Avatar text="T" size="xx-large" className="my-2" />
      </View>
      <View>
        <Avatar avatar={images.birthdayCake} size="xx-small" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="x-small" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="small" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="medium" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="large" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="x-large" className="my-2" />
        <Avatar avatar={images.birthdayCake} size="xx-large" className="my-2" />
      </View>
      <View>
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="xx-small"
          className="my-2"
          color="primary"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="x-small"
          className="my-2"
          subLabel="Culi"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="small"
          className="my-2"
          color="primary"
          subLabel="Culi"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="medium"
          className="my-2"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="large"
          className="my-2"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="x-large"
          className="my-2"
        />
        <AvatarName
          user={{ fullName: "Trung", avatar: images.birthdayCake }}
          size="xx-large"
          className="my-2"
        />
      </View>
    </View>
  );
};

export default TestAvatar;
