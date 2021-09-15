import React from "react";
import Image from "../../component/image/Image";
import View from "../../component/view/View";
import images from "./Images";

export interface ITestImagesProps {
  [key: string]: any;
}

const TestImages: React.FC<ITestImagesProps> = ({ id }) => {
  return (
    <View>
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="my-2 image-square-x-small"
      />
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="imy-2 image-square-small"
      />
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="my-2 image-square-medium"
      />
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="my-2 image-square-large"
      />
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="my-2 image-square-x-large"
      />
      <Image
        source={images.afternoon}
        resizeMode="contain"
        className="image-square-xx-large"
      />
    </View>
  );
};

export default TestImages;
