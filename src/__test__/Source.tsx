import React from "react";
import { ITabViewProps } from "../component/tab/TabView";
import TestAvatar from "./testAvatar/TestAvatar";
import TestButton from "./testButton/TestButton";
import TestCalendar from "./testCalendar/TestCalendar";
import TestHeader from "./testHeader/TestHeader";
import TestImages from "./testImage/TestImages";
import TestInput from "./testInput/TestInput";
import TestSelect from "./testSelect/TestSelect";
import TestStyle from "./testStyle/TestStyle";

const DATA_SOURCE: ITabViewProps["dataSource"] = [
  { key: "testStyle", label: "Style", component: <TestStyle /> },
  { key: "testInput", label: "Input", component: <TestInput /> },
  { key: "testSelect", label: "Select", component: <TestSelect /> },
  { key: "testButton", label: "Button", component: <TestButton /> },
  { key: "testImage", label: "Image", component: <TestImages /> },
  { key: "testAvatar", label: "Avatar", component: <TestAvatar /> },
  { key: "testHeader", label: "Header", component: <TestHeader /> },
  { key: "testCalendar", label: "Calendar", component: <TestCalendar /> },
];

export default DATA_SOURCE;
