import React, { ElementRef, useRef, useState } from "react";
import DatePicker from "react-native-date-picker";
import CheckBox from "../../component/checkbox/CheckBox";
import InputDate from "../../component/input/InputDate";
import InputSearch from "../../component/input/InputSearch";
import InputText from "../../component/input/InputText";
import Text from "../../component/text/Text";
import TouchableOpacity from "../../component/view/TouchableOpacity";
import View from "../../component/view/View";

export interface ITestInputProps {
  [key: string]: any;
}

const TestInput: React.FC<ITestInputProps> = ({ id }) => {
  const dateRef = useRef<ElementRef<typeof DatePicker>>(null);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setdate] = useState();
  return (
    <View className="my-4 w-100">
      {/* <CheckBox /> */}
      <InputText
        variant="standard"
        className="my-2"
        label="Input Standard"
        onPressIcon={() => {}}
        placeholder="Input Standard"
      />
      <InputText
        variant="outline"
        className="my-2"
        label="Input Outline"
        placeholder="Input Outline"
        onPressIcon={() => {}}
      />
      <InputText
        variant="pill"
        className="my-2"
        label="Input Pill"
        placeholder="Input Pill"
        onPressIcon={() => {}}
      />
      <InputText
        variant="rounded"
        className="my-2"
        label="Input Rounded"
        placeholder="Input Rounded"
        onPressIcon={() => {}}
      />
      <InputSearch
        variant="pill"
        className="my-2"
        onPressIcon={() => {}}
        label="Search Input"
      />
      <InputDate
        label="Date Input"
        variant="outline"
        className="my-2"
        mode="date"
        onChange={(v) => console.log({ v })}
      />
      <View className="flex-center-y">
        <TouchableOpacity
          onPress={() => {
            setOpenDateModal(true);
          }}
        >
          <Text>123</Text>
        </TouchableOpacity>
      </View>
      {/* <DatePicker
        modal
        date={new Date()}
        onConfirm={() => setOpenDateModal(false)}
        open={openDateModal}
        onCancel={() => {
          setOpenDateModal(false);
        }}
        mode="datetime"
        androidVariant="nativeAndroid"
      /> */}
    </View>
  );
};

export default TestInput;
