/* eslint-disable no-nested-ternary */
import React, { useState, useRef, useEffect, forwardRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  useColorScheme,
} from "react-native";
import {
  TabView as RNTabView,
  TabViewProps,
  Route,
  TabBarProps,
  SceneRendererProps,
  // TabBar,
} from "react-native-tab-view";
import ClassNames from "classnames";
import AwesomeList, {
  IAwesomeListProps,
} from "../list/awesomeList/AwesomeList";
import View from "../view/View";
import Text from "../text/Text";
import Colors from "../../style/color/_color";
import { getStyleProps } from "../../style/style";
import TabBar from "./TabBar";

export interface ITabViewRoute extends Route {
  label?: string;
  render?: (props?: any) => any;
  component?: Element;
}

export interface IRenderTabViewProps<T> extends SceneRendererProps {
  tabIndex: number;
  route: T;
}

export interface ITabViewProps
  extends Omit<
    TabViewProps<any>,
    "renderScene" | "onIndexChange" | "navigationState"
  > {
  key?: any;
  className?: string;
  initialIndex?: number;
  dataSource: Array<ITabViewRoute>;
  onChangeIndex?: (index: number) => any;
  labelWidth?: number | string;
  isSeparate?: boolean; // if true all the tab view will be render using AwesomeList component
  scrollEnabled?: boolean;
  renderTabView?: (props: IRenderTabViewProps<ITabViewRoute>) => Element;
  source?: (
    props: { pageIndex: number; pageSize: number },
    index: number
  ) => any;
  transformer?: (res: any, index: number) => any;
  renderItem?: ({
    item,
    index,
    tabIndex,
  }: {
    item: any;
    index: number;
    tabIndex: number;
  }) => any;
  tabBarStyle?: ViewStyle;
  listStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  activeLabelStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  textLabelStyle?: TextStyle;
  activeLabelTextColor?: string;
  labelTextColor?: string;
  indicatorColor?: string;
  awesomeListProps?: IAwesomeListProps<any>;
}
export interface ITabViewMethod {}

function TabView(
  {
    // setRef,
    source,
    transformer,
    renderItem,
    initialIndex = 0,
    dataSource = [],
    onChangeIndex,
    labelWidth = 90,
    isSeparate = true,
    renderTabView,
    scrollEnabled = false,
    style,
    tabBarStyle,
    tabStyle,
    listStyle,
    activeLabelTextColor,
    labelTextColor,
    indicatorColor = "white",
    textLabelStyle = {},
    activeLabelStyle,
    labelStyle,
    key,
    awesomeListProps = {} as any,
    ...rest
  }: ITabViewProps,

  ref: React.ForwardedRef<ITabViewMethod>
) {
  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState(dataSource);
  const listRef = useRef();
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const containerBg = { backgroundColor: isDarkMode ? "black" : "white" };

  // useEffect(() => {
  //   setRef && setRef(listRef.current);
  // });

  const renderScene = ({ route }: { route: ITabViewRoute }) => {
    if (Math.abs(index - routes.indexOf(route)) > 0) {
      return <View />;
    }
    return (
      <AwesomeList
        key={route.key}
        // ref={(ref) => {
        //   listRef.current = ref;
        // }}
        isPaging
        pageSize={10}
        {...awesomeListProps}
        keyExtractor={(item, index) => `${item?.id}${index}`}
        source={(paging) => source && source(paging, index)}
        transformer={(res) => transformer && transformer(res, index)}
        renderItem={(data) =>
          renderItem && renderItem({ ...data, tabIndex: index })
        }
        listStyle={listStyle}
      />
    );
  };

  const renderTabBar: TabViewProps<ITabViewRoute>["renderTabBar"] = (props) => {
    const tabBarClass = ClassNames("border-bottom-0", {
      "bg-white": !isDarkMode,
      "bg-dark": isDarkMode,
    });
    const tabClass = ClassNames({ "width-auto": scrollEnabled });
    return (
      <TabBar
        {...(props as any)}
        style={[styles.tabBar, tabBarStyle]}
        renderLabel={renderLabel}
        scrollEnabled={scrollEnabled}
        pressColor="#c2e0ff"
        bounces
        tabStyle={tabStyle}
        className={tabBarClass}
        classNameTab={tabClass}
        indicatorStyle={{ backgroundColor: indicatorColor }}
      />
    );
  };

  const renderLabel: TabBarProps<ITabViewRoute>["renderLabel"] = ({
    route,
    focused,
    color,
  }) => {
    const labelClass = ClassNames("flex-1 justify-content-center text-center", {
      "bg-primary rounded-pilled": focused,
      "bg-white rounded-pilled": isDarkMode && !focused,
    });
    return (
      <View
        style={[
          { paddingVertical: focused ? undefined : 10, width: labelWidth },
          focused ? activeLabelStyle : labelStyle,
        ]}
        className={labelClass}
      >
        <Text
          className="h5 text-center px-2"
          style={{
            color: focused
              ? activeLabelTextColor || Colors.white
              : labelTextColor || Colors.black,
            paddingBottom: Platform.OS === "ios" ? 0 : undefined,
            ...textLabelStyle,
          }}
          numberOfLines={1}
        >
          {route.label || route.title}
        </Text>
      </View>
    );
  };

  return (
    <RNTabView
      {...rest}
      key={key}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={
        isSeparate
          ? ({ route, jumpTo, layout, position }) =>
              renderTabView &&
              renderTabView({
                route,
                tabIndex: index,
                position,
                layout,
                jumpTo,
              })
          : renderScene
      }
      onIndexChange={(index) => {
        setIndex(index);
        onChangeIndex && onChangeIndex(index);
      }}
      sceneContainerStyle={[
        styles.sceneContainerStyle,
        containerBg,
        tranStyle,
        style,
      ]}
      initialLayout={{ width: Dimensions.get("window").width }}
    />
  );
}

export default forwardRef(TabView);

const styles = StyleSheet.create({
  sceneContainerStyle: {
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  tabBar: {
    shadowOffset: { height: 0, width: 0 },
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
  },
});
