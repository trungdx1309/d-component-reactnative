import React, { useState } from "react";
import Select from "../../component/select/Select";
import View from "../../component/view/View";
import { SELECT_DATA } from "../data/TestConstant";

export interface ITestSelectProps {
  [key: string]: any;
}

const TestSelect: React.FC<ITestSelectProps> = ({ id }) => {
  const [selectValue, setSelectValue] = useState();
  const [singleValue, setSingleValue] = useState();
  return (
    <View className="py-3">
      <Select
        label="Select"
        placeholder="Placeholder"
        variant="standard"
        className="my-2"
        transformer={(res) => SELECT_DATA}
        getLabel={(item) => item?.label}
        quickSelect
        multiple
        value={selectValue}
        onChange={(v) => setSelectValue(v)}
        quickRemove
      />
      <Select
        label="Select"
        placeholder="Placeholder"
        variant="outline"
        className="my-2"
        transformer={(res) => SELECT_DATA}
        getLabel={(item) => item?.label}
        value={singleValue}
        onChange={(v) => setSingleValue(v)}
        quickSelect
      />
    </View>
  );
};

export default TestSelect;
