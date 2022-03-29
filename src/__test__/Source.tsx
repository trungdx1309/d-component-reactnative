import React from "react";
import { ITabViewProps } from "../component/tab/TabView";
import TestAvatar from "./testAvatar/TestAvatar";
import TestButton from "./testButton/TestButton";
import TestCalendar from "./testCalendar/TestCalendar";
import TestHeader from "./testHeader/TestHeader";
import TestImages from "./testImage/TestImages";
import TestInput from "./testInput/TestInput";
import TestItems from "./testItems/TestItems";
import TestList from "./testList/TestList";
import TestSelect from "./testSelect/TestSelect";
import TestStyle from "./testStyle/TestStyle";
import TestTabStepper from "./testTabStepper/TestTabStepper";

const DATA_SOURCE: ITabViewProps["dataSource"] = [
  { key: "testStyle", label: "Style", component: <TestStyle /> },
  { key: "testItems", label: "Items", component: <TestItems /> },
  { key: "testInput", label: "Input", component: <TestInput /> },
  { key: "testSelect", label: "Select", component: <TestSelect /> },
  { key: "testButton", label: "Button", component: <TestButton /> },
  { key: "testImage", label: "Image", component: <TestImages /> },
  { key: "testAvatar", label: "Avatar", component: <TestAvatar /> },
  { key: "testHeader", label: "Header", component: <TestHeader /> },
  { key: "testCalendar", label: "Calendar", component: <TestCalendar /> },
  { key: "testList", label: "List", component: <TestList /> },
  {
    key: "testTabStepper",
    label: "Tab Stepper",
    component: <TestTabStepper />,
  },
];

export default DATA_SOURCE;
