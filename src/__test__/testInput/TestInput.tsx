import React, { ElementRef, useRef, useState } from "react";
import DatePicker from "react-native-date-picker";
import CheckBox from "../../component/checkbox/CheckBox";
import InputDate from "../../component/input/InputDate";
import InputDateRange from "../../component/input/InputDateRange";
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
  const [date, setDate] = useState<any>();
  const [dateRange, setDateRange] = useState<any[]>([]);

  return (
    <View className="my-4 w-100">
      {/* <CheckBox /> */}
      <InputText
        variant="standard"
        className="my-2"
        label="Input Standard"
        onPressIcon={() => {}}
        placeholder="Input Standard"
        error="Error Test Input"
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
        label="Date Input Outline"
        variant="outline"
        className="my-2"
        mode="date"
        placeholder="Date Input Outline"
        onChange={(v) => {
          setDate(v);
        }}
        value={date}
      />
      <InputDate
        label="Date Input Standard"
        variant="standard"
        className="my-2"
        mode="date"
        onChange={(v) => {
          setDate(v);
        }}
        value={date}
        placeholder="Date Input Outline"
      />
      <InputDate
        label="Date Input Rounded"
        variant="rounded"
        className="my-2"
        mode="datetime"
        placeholder="Date Input Rounded"
        onChange={(v) => {
          setDate(v);
        }}
        value={date}
      />
      <InputDate
        label="Date Input Pill"
        variant="pill"
        className="my-2"
        mode="date"
        placeholder="Date Input Pill"
        onChange={(v) => {
          setDate(v);
        }}
        value={date}
      />
      <InputDateRange
        value={dateRange}
        onChange={(v = []) => setDateRange(v)}
        mode="datetime"
      />

      <InputDate
        variant="icon"
        label="Date Input Icon"
        className="my-2 align-self-start"
        mode="datetime"
        placeholder="Date Input Pill"
        onChange={(v) => {
          setDate(v);
        }}
        value={date}
      />
      <InputText
        variant="outline"
        className="my-2"
        label="Input Outline"
        placeholder="Input Outline"
        onPressIcon={() => {}}
        error="Error Test Input"
      />
      <InputText
        variant="pill"
        className="my-2"
        label="Input Pill"
        placeholder="Input Pill"
        onPressIcon={() => {}}
      />
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
