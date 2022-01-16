import React from "react";
import { ScrollView } from "../..";
import Avatar from "../../component/avatar/Avatar";
import Icon from "../../component/icon/Icon";
import Badge from "../../component/items/Badge";
import Text from "../../component/text/Text";
import View from "../../component/view/View";
import images from "../testImage/Images";

export interface ITestItemsProps {
  [key: string]: any;
}

const TestItems: React.FC<ITestItemsProps> = ({ id }) => {
  const renderRow = (label: string, component: any) => {
    return (
      <View className="flex-center-y my-2">
        <Text className="h5">{label} : </Text>
        {component}
      </View>
    );
  };
  return (
    <ScrollView className="my-4 w-100">
      <Text className="label font-weight-bold">Badge</Text>
      {renderRow(
        "Size: xx-small Position: top-right",
        <Badge size="xx-large" variant="icon">
          <Avatar avatar={images.birthdayCake} size="medium" className="my-2" />
        </Badge>
      )}
      {renderRow(
        "Size xx-small Position: top-right",
        <Badge size="xx-small">
          <Icon name="filter" className="my-2" />
        </Badge>
      )}
      {renderRow(
        "Size x-small Position: top-right",
        <Badge size="small" styleBadge={{ right: -3 }}>
          <Icon name="filter" className="my-2" />
        </Badge>
      )}
      {renderRow(
        "Size x-small Position: bottom-left",
        <Badge size="small" position="bottom-left">
          <Icon name="filter" className="my-2" />
        </Badge>
      )}
      <Text className="label font-weight-bold">Icon</Text>
      {renderRow(
        "Pressable Icon",
        <Icon name="arrow-back" onPress={() => {}} size={25} />
      )}
    </ScrollView>
  );
};

export default TestItems;
