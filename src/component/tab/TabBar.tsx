import React from "react";
import {
  TabBar as RNTabBar,
  TabViewProps,
  TabBarProps,
} from "react-native-tab-view";
import { getStyleProps } from "../../style/style";

export interface ITabBarProps extends TabBarProps<any> {
  className?: string;
  classNameTab?: string;
}

const TabBar: React.FC<ITabBarProps> = ({ style, tabStyle, ...rest }) => {
  const transStyle = getStyleProps(rest);
  const transTabStyle = getStyleProps(rest, "classNameTab");
  return (
    <RNTabBar
      style={[transStyle, style]}
      tabStyle={[transTabStyle, tabStyle]}
      {...rest}
    />
  );
};

export default TabBar;
