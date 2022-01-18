import React from "react";
import Button from "../../component/button/Button";
import ScrollView from "../../component/view/ScrollView";

export interface ITestButtonProps {
  [key: string]: any;
}

const TestButton: React.FC<ITestButtonProps> = ({ id }) => {
  return (
    <ScrollView className="w-100">
      <Button size="xx-large" className="my-2" colorDarkMode="red">
        Button XX Large
      </Button>
      <Button size="x-large" className="my-2">
        Button X Large
      </Button>
      <Button
        size="large"
        className="my-2 align-self-start"
        iconName="refresh"
        disabled
        disableColor="blueLight"
      >
        Button Large
      </Button>
      <Button
        size="medium"
        className="my-2 align-self-start"
        // iconName="refresh"
      >
        Medium
      </Button>
      <Button size="small" className="my-2 align-self-start">
        Button Small
      </Button>
      <Button size="x-small" className="my-2">
        Button X Small
      </Button>
    </ScrollView>
  );
};

export default TestButton;
