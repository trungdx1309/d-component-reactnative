import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import ClassNames from "classnames";
import { ColorKeyType } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import ScrollView from "../view/ScrollView";
import TouchableOpacity from "../view/TouchableOpacity";
import View from "../view/View";
import { IBadgeProps } from "../items/Badge";

export interface ITabStepperItemData {
  id: any;
  label: string;
  style?: ViewStyle;
  [key: string]: any;
}

export interface ITabStepperProps
  extends Pick<
    ITabStepperItemProps,
    | "activeColor"
    | "inActiveColor"
    | "colorDarkMode"
    | "indexColorDarkMode"
    | "variant"
    | "shape"
  > {
  dataSource: ITabStepperItemData[];
  value?: ITabStepperItemData;
  className?: string;
  classNameScrollView?: string;
  scrollable?: boolean;
  onChange?: (value: ITabStepperItemData, index?: number) => any;
  getValue?: (item: ITabStepperItemData, index?: number) => any;
  getLabel?: (item: ITabStepperItemData, index?: number) => any;
  onPressItem?: (item: ITabStepperItemData, index: number) => any;
  getItemProps?: (props: {
    item: ITabStepperItemData;
    isActive: boolean;
    isPassed: boolean;
  }) => Partial<ITabStepperItemProps>;
}

export interface ITabStepperItemProps {
  valueItem: ITabStepperItemData;
  index: number;
  isLastStep?: boolean;
  active?: boolean;
  isPassed?: boolean;
  onPress?: any;
  style?: ViewStyle;
  activeColor?: ColorKeyType;
  inActiveColor?: ColorKeyType;
  colorDarkMode?: ColorKeyType;
  indexColorDarkMode?: ColorKeyType;
  indexColor?: ColorKeyType;
  getLabel?: (item: ITabStepperItemData) => any;
  styleTextIndex?: TextStyle;
  styleTextLabel?: TextStyle;
  variant?: "icon" | "index";
  shape?: IBadgeProps["shape"];
  showBorderActive?: boolean;
  tabLineLength?: number;
  tabLineHeight?: number;
}

export const TabStepperItem: React.FC<ITabStepperItemProps> = ({
  valueItem,
  index,
  active,
  isPassed,
  isLastStep,
  onPress,
  style,
  styleTextIndex,
  styleTextLabel,
  activeColor = "primary",
  inActiveColor = "gray",
  colorDarkMode = "white",
  indexColorDarkMode = "black",
  indexColor = "white",
  getLabel = (item) => item?.label,
  variant = "index",
  shape = "circle",
  showBorderActive,
  tabLineLength = 20,
  tabLineHeight = 5,
}) => {
  const colorActive = getColorValue(activeColor);
  const colorInActive = getColorValue(inActiveColor);
  const backgroundDarkMode = getColorValue(colorDarkMode);
  const displayLabel = getLabel(valueItem);

  const colorStyle: ViewStyle = {
    backgroundColor: active || isPassed ? colorActive : colorInActive,
  };
  const indexWrapperClass = ClassNames({
    "rounded-pill": shape === "circle",
    "rounded-2": shape === "rounded",
    "border-2 border-blue": showBorderActive && active,
  });
  const tabLineStyle: ViewStyle = {
    width: tabLineLength,
    height: tabLineHeight,
  };

  const indexView = () => {
    if (variant === "icon") {
      return (
        <Icon
          name="check"
          size={16}
          color={indexColor}
          colorDarkMode={indexColorDarkMode}
        />
      );
    }
    return (
      <Text
        style={[styleTextIndex]}
        colorDarkMode={indexColorDarkMode}
        color={indexColor}
      >
        {index}
      </Text>
    );
  };

  return (
    <View style={[styles.tabItem, style]} colorDarkMode="transparent">
      {index !== 0 && (
        <View
          style={{
            ...tabLineStyle,
            ...colorStyle,
          }}
          colorDarkMode={backgroundDarkMode}
        />
      )}
      <TouchableOpacity
        style={styles.tabLabel}
        onPress={onPress}
        colorDarkMode="transparent"
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            ...colorStyle,
          }}
          colorDarkMode={backgroundDarkMode}
          className={indexWrapperClass}
        >
          {indexView()}
        </View>
        {displayLabel && (
          <Text style={[styles.tabLabelText, styleTextLabel]}>
            {displayLabel}
          </Text>
        )}
      </TouchableOpacity>
      {!isLastStep && (
        <View
          style={{
            ...tabLineStyle,
            ...colorStyle,
          }}
          colorDarkMode={backgroundDarkMode}
        />
      )}
    </View>
  );
};

const TabStepper: React.FC<ITabStepperProps> = ({
  dataSource,
  value,
  onChange,
  getValue = (item) => item?.id,
  getLabel = (item) => item?.label,
  onPressItem,
  getItemProps,
  className,
  classNameScrollView,
  scrollable,
  activeColor,
  inActiveColor,
  variant,
  shape,
}) => {
  const content = (
    <View
      style={styles.container}
      className={className}
      colorDarkMode="transparent"
    >
      {dataSource.map((iTab, index) => {
        const activeIndex = dataSource.findIndex(
          (item) => getValue(value as any, index) === getValue(item, index)
        );
        const isActive = activeIndex === index;
        const isPassed = activeIndex > index;
        let itemProps: any = {};
        if (getItemProps) {
          itemProps = getItemProps({ item: iTab, isActive, isPassed });
        }
        return (
          <TabStepperItem
            valueItem={iTab}
            index={index}
            isLastStep={index === dataSource?.length - 1}
            active={isActive}
            isPassed={isPassed}
            activeColor={activeColor}
            inActiveColor={inActiveColor}
            getLabel={() => getLabel && getLabel(iTab, index)}
            onPress={() => onPressItem && onPressItem(iTab, index)}
            variant={variant}
            shape={shape}
            {...itemProps}
          />
        );
      })}
    </View>
  );
  if (scrollable) {
    return (
      <ScrollView
        horizontal
        className={`w-full ${classNameScrollView}`}
        colorDarkMode="transparent"
      >
        {content}
      </ScrollView>
    );
  }
  return content;
};

export default TabStepper;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabLabel: {
    alignItems: "center",
    position: "relative",
  },
  tabLabelText: {
    marginTop: 35,
    position: "absolute",
    overflow: "visible",
    width: 100,
    textAlign: "center",
  },
});
