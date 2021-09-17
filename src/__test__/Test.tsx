/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Button from "../component/button/Button";
import InputText from "../component/input/InputText";
import Text from "../component/text/Text";
import SafeAreaView from "../component/view/SafeAreaView";
import ScrollView from "../component/view/ScrollView";
import View from "../component/view/View";
import "./configurationStyle";
import TestAvatar from "./testAvatar/TestAvatar";
import TestImages from "./testImage/TestImages";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView>
        <View>
          <TestImages />
          <TestAvatar />
          <InputText label="Input" className="my-3" />
          <Text>123</Text>
          <Button className="rounded-left-pilled">Button</Button>
        </View>
      </ScrollView>
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
