import React from "react";
import Header from "../../component/header/Header";
import Icon from "../../component/icon/Icon";
import ScrollView from "../../component/view/ScrollView";
import View from "../../component/view/View";

export interface ITestHeaderProps {
  [key: string]: any;
}

const TestHeader: React.FC<ITestHeaderProps> = ({ id }) => {
  return (
    <ScrollView className="w-100">
      <Header
        title="Default Header"
        theme="primary"
        onLeftPress={() => {}}
        onRightPress={() => {}}
      />
      <Header
        className="my-3"
        title="Header"
        theme="light"
        leftText="Left"
        onLeftPress={() => {}}
        onRightPress={() => {}}
        customRight={
          <View className="flex-center-y">
            <Icon name="filter-list" className="mr-2" onPress={() => {}} />
            <Icon name="explore" />
          </View>
        }
        showSearch
      />
    </ScrollView>
  );
};

export default TestHeader;
