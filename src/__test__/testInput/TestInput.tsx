import React from "react";
import CheckBox from "../../component/checkbox/CheckBox";
import InputDate from "../../component/input/InputDate";
import InputSearch from "../../component/input/InputSearch";
import View from "../../component/view/View";

export interface ITestInputProps {
  [key: string]: any;
}

const TestInput: React.FC<ITestInputProps> = ({ id }) => {
  return (
    <View className="my-4">
      <CheckBox />
      <InputSearch variant="outline" className="my-2" onPressIcon={() => {}} />
      <InputDate label="Date Input" variant="icon" className="my-2" />
    </View>
  );
};

export default TestInput;
