import React from "react";
import InputDate from "../../component/input/InputDate";
import View from "../../component/view/View";

export interface ITestInputProps {
  [key: string]: any;
}

const TestInput: React.FC<ITestInputProps> = ({ id }) => {
  return (
    <View className="my-4">
      <InputDate label="Date Input" variant="icon" className="" />
    </View>
  );
};

export default TestInput;
