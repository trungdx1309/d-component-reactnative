import React from "react";
import CheckBox from "../../component/checkbox/CheckBox";
import InputDate from "../../component/input/InputDate";
import View from "../../component/view/View";

export interface ITestInputProps {
  [key: string]: any;
}

const TestInput: React.FC<ITestInputProps> = ({ id }) => {
  return (
    <View className="my-4">
      <CheckBox />
      <InputDate label="Date Input" variant="icon" className="" />
    </View>
  );
};

export default TestInput;
