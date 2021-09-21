import React from "react";
import Header from "../../component/header/Header";
import Icon from "../../component/icon/Icon";
import View from "../../component/view/View";

export interface ITestHeaderProps {
  [key: string]: any;
}

const TestHeader: React.FC<ITestHeaderProps> = ({ id }) => {
  return (
    <View className="my-4">
      <Header
        title="Header"
        color="primary"
        leftText="Left"
        onLeftPress={() => {}}
        onRightPress={() => {}}
        customRight={
          <View className="flex-center-y">
            <Icon name="filter-list" className="mr-2" onPress={() => {}} />
            <Icon name="explore" />
          </View>
        }
      />
    </View>
  );
};

export default TestHeader;
