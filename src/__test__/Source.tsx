import React from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import DatePicker from "react-native-datepicker";
import Button from "../component/button/Button";
import InputText from "../component/input/InputText";
import Text from "../component/text/Text";
import SafeAreaView from "../component/view/SafeAreaView";
import ScrollView from "../component/view/ScrollView";
import View from "../component/view/View";
import TestAvatar from "./testAvatar/TestAvatar";
import TestImages from "./testImage/TestImages";
import TestInput from "./testInput/TestInput";
import TestHeader from "./testHeader/TestHeader";
import TestCalendar from "./testCalendar/TestCalendar";
import AwesomeList from "../component/list/awesomeList/AwesomeList";
import TestSelect from "./testSelect/TestSelect";
import TestButton from "./testButton/TestButton";
import { ITabViewProps } from "../component/tab/TabView";

const DATA_SOURCE: ITabViewProps["dataSource"] = [
  { key: "testInput", label: "Input", component: <TestInput /> },
  { key: "testSelect", label: "Select", component: <TestSelect /> },
  { key: "testButton", label: "Button", component: <TestButton /> },
  { key: "testImage", label: "Image", component: <TestImages /> },
  { key: "testAvatar", label: "Avatar", component: <TestAvatar /> },
  { key: "testHeader", label: "Header", component: <TestHeader /> },
  { key: "testCalendar", label: "Calendar", component: <TestCalendar /> },
];

export default DATA_SOURCE;
