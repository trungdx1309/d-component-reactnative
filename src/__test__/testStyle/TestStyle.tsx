import React from "react";
import ScrollView from "../../component/view/ScrollView";
import View from "../../component/view/View";

export interface ITestStyleProps {
  [key: string]: any;
}

const TestStyle: React.FC<ITestStyleProps> = ({ id }) => {
  return (
    <ScrollView className="w-100">
      <View className="w-100 justify-content-center align-center">
        <View className="width-50 height-50  border-dashed border-primary my-3" />
      </View>
    </ScrollView>
  );
};

export default TestStyle;
