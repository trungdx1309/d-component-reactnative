import ClassNames from "classnames";
import React, {
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import Carousel, {
  AdditionalParallaxProps,
  CarouselProps,
} from "react-native-snap-carousel";
import { AppSizes } from "../..";
import Icon from "../icon/Icon";
import TouchableOpacity from "../view/TouchableOpacity";
import View from "../view/View";
import Image from "./Image";

export interface IImageCarouselProps extends CarouselProps<any> {
  className?: string;
  classNameItem?: string;
  carouselHeight?: number;
  iconColor?: string;
  getImage?: (item: any) => any;
  onPressItem?: ({ item, index }: { item: any; index: any }) => any;
}
export interface IImageCarouselMethod {}

const ImageCarousel: React.ForwardRefRenderFunction<
  IImageCarouselMethod,
  IImageCarouselProps
> = (
  {
    loop = true,
    data,
    iconColor = "white",
    className,
    classNameItem,
    renderItem,
    onPressItem,
    getImage = (item) => item?.url,
    carouselHeight = (AppSizes.screenWidth * 2) / 3,
    ...rest
  },
  ref
) => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  useImperativeHandle(ref, () => ({}));

  const renderImage = (
    entity: any = {},
    parallaxProps: AdditionalParallaxProps
  ) => {
    if (renderItem) {
      return renderItem(entity, parallaxProps);
    }
    const { item, index } = entity;
    const itemClass = ClassNames("flex-1", classNameItem);
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPressItem && onPressItem({ item, index })}
      >
        <Image
          source={{ uri: getImage(item) }}
          style={{ height: carouselHeight }}
          className={itemClass}
        />
      </TouchableOpacity>
    );
  };

  const renderArrows = () => {
    if (data && data.length < 2) {
      return null;
    }

    const iconClass =
      "bg-blackOverlay position-absolute width-40 height-40 flex-center-y justify-center rounded-pilled";

    const iconLeftClass = ClassNames(iconClass, "left-5");
    const iconRightClass = ClassNames(iconClass, "right-5");

    return (
      <>
        <TouchableOpacity
          style={{
            top: carouselHeight / 2 - 20,
          }}
          className={iconLeftClass}
          onPress={() =>
            carouselRef.current && carouselRef.current.snapToPrev()
          }
        >
          <Icon
            name="chevron-left"
            className={`border-2 rounded-pilled border-${iconColor}`}
            color={iconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: carouselHeight / 2 - 20,
          }}
          className={iconRightClass}
          onPress={() =>
            carouselRef.current && carouselRef.current.snapToNext()
          }
        >
          <Icon
            name="chevron-right"
            className={`border-2 rounded-pilled border-${iconColor}`}
            color={iconColor}
          />
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View className={className}>
      <View style={{}}>
        <Carousel
          ref={carouselRef}
          loop={loop}
          data={data}
          {...(rest as any)}
          sliderWidth={AppSizes.screenWidth - 20}
          itemWidth={AppSizes.screenWidth - 20}
          renderItem={renderImage}
        />
        {renderArrows()}
      </View>
    </View>
  );
};

export default forwardRef(ImageCarousel);
