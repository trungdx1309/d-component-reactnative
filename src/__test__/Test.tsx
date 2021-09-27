/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
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
import "./configurationStyle";
import TestAvatar from "./testAvatar/TestAvatar";
import TestImages from "./testImage/TestImages";
import TestInput from "./testInput/TestInput";
import TestModal from "./testModal/TestModal";
import Modal from "../component/modal/Modal";
import TestHeader from "./testHeader/TestHeader";
import TestCalendar from "./testCalendar/TestCalendar";
import AwesomeList from "../component/list/awesomeList/AwesomeList";

interface ITestData {
  id: string;
  info: any;
}

const DATA = [
  { id: 1, info: "qeqe" },
  { id: 2, info: "sdf" },
  { id: 3, info: "fsff" },
];

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [openModal, setOpenModal] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderMainView = () => {
    return (
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <TestImages />
        <TestAvatar />
        {/* <TestCalendar /> */}
        <TestHeader />
        <InputText label="Input" className="my-3" />
        <TestInput />
        <Button className="rounded-left-pilled" color="gray" disabled>
          Button
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* <AwesomeList<ITestData>
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
        source={() => Promise.resolve()}
        transformer={(res) => DATA}
      /> */}
      <ScrollView>
        {renderMainView()}
        <TestModal onPress={() => setOpenModal(true)} />
      </ScrollView>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        size="fullscreen"
        showHeader
        useScrollView
        showFooter
      >
        {renderMainView()}
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
