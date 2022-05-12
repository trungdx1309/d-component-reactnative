/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
// react
// third-party
import ClassNames from "classnames";
import React, { ElementRef, useRef } from "react";
import { FlatList, ViewStyle } from "react-native";
import { AppSizes } from "../..";
// application
import Button, { IButtonProps } from "../button/Button";
import View from "../view/View";
// data stubs

export interface ITabItem {
  id: string | number;
  label?: string | number;
  iconName?: string;
  [key: string]: any;
}

export interface ITabBarProps<T extends ITabItem> {
  dataSource: Array<T>;
  onChange?: (item: ITabItem, index: number) => void;
  getLabel?: (item: ITabItem) => any;
  getItemProps?: (props: {
    item: ITabItem;
    isActive?: boolean;
    index?: any;
    className?: string;
  }) => IButtonProps; // remember to return min-width for tab item in order for scroll in horizontal mode to work
  value?: ITabItem | null;
  className?: string;
  classNameItem?: string;
  variant?: "horizontal" | "vertical";
  minWidthItem?: string | number;
  scrollable?: boolean;
  hideScrollBar?: boolean;
  style?: ViewStyle;
  styleScrollView?: ViewStyle;
  height?: number;
}

const TabBar: React.FC<ITabBarProps<ITabItem>> = ({
  dataSource = [],
  value,
  className,
  classNameItem,
  variant = "horizontal",
  onChange,
  getLabel,
  getItemProps,
  scrollable = false,
  minWidthItem = 50,
  hideScrollBar = true,
  style,
  styleScrollView,
  height = 40,
}) => {
  const wrapperClass = ClassNames(
    `flex-center-y`,
    {
      // "d-flex ": variant === "horizontal",
    },
    className
  );
  const activateScroll = scrollable && variant === "horizontal";
  const listRef = useRef<ElementRef<typeof FlatList>>(null);

  const renderItem = (tabItem: ITabItem, index: number) => {
    const isSelect = value?.id === tabItem?.id;
    const itemClass = ClassNames(
      "d-tab-bar__item text-small",
      {
        "bg-primary": isSelect,
      },
      classNameItem
    );
    const itemClassLabel = ClassNames(
      "text-primary",
      {
        "text-white": isSelect,
      },
      classNameItem
    );
    let label = tabItem?.label ?? "N/A";
    const icon = tabItem?.iconName ?? undefined;

    if (getLabel) {
      label = getLabel(tabItem);
    }
    let buttonProps: any = {};
    if (getItemProps) {
      buttonProps = getItemProps({
        item: tabItem,
        isActive: isSelect,
        index,
        className: itemClass,
      });
    }
    return (
      <Button
        key={`${tabItem?.id}_${tabItem?.label}_${index}`}
        className={itemClass}
        classNameLabel={itemClassLabel}
        onPress={() => onChange && onChange(tabItem, index)}
        variant="trans"
        iconName={icon}
        style={{
          height,
          minWidth: activateScroll ? minWidthItem : undefined,
        }}
        {...buttonProps}
      >
        {label}
      </Button>
    );
  };

  if (scrollable) {
    return (
      <FlatList
        data={dataSource}
        renderItem={({ item, index }) => renderItem(item as any, index)}
        horizontal
        style={[
          {
            width: AppSizes.screenWidth,
            maxHeight: height,
            backgroundColor: "yellow",
          },
          styleScrollView,
        ]}
        showsHorizontalScrollIndicator={false}
        ref={listRef}
        onScrollToIndexFailed={({ index }) => {
          listRef.current && listRef.current.scrollToIndex({ index: 0 });
        }}
      />
    );
  }
  return (
    <View className={wrapperClass} style={style}>
      {dataSource.map((tabItem, index) => {
        return renderItem(tabItem, index);
      })}
    </View>
  );
};

export default TabBar;
