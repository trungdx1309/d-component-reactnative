import React, { useEffect, useMemo, useState } from "react";
import ClassNames from "classnames";
import _ from "lodash";
import { ViewStyle } from "react-native";
import AwesomeList, {
  IAwesomeListProps,
} from "../list/awesomeList/AwesomeList";
import TouchableOpacity from "../view/TouchableOpacity";
import View from "../view/View";
import Text from "../text/Text";
import Modal from "../modal/Modal";
import Icon from "../icon/Icon";
import Chip from "../chip/Chip";
import CheckBox from "../checkbox/CheckBox";
import Button from "../button/Button";
import AppSizes from "../../style/constant/AppSizes";
import { InputErrorView } from "../input/InputText";

export interface ISelectProps
  extends Partial<
    Pick<
      IAwesomeListProps<any>,
      "source" | "transformer" | "keyExtractor" | "isPaging"
    >
  > {
  variant?: "standard" | "outline" | "rounded" | "pill" | "trans";
  label?: any;
  placeholder?: string;
  selectText?: string;
  error?: any;
  height?: number;
  className?: string;
  classNameLabel?: string;
  classNameContent?: string;
  classNameError?: string;
  iconName?: string;
  style?: ViewStyle;
  styleContent?: ViewStyle;
  styleList?: ViewStyle;
  value?: any; // is Object if multiple = false and Array if multiple = true
  onChange?: (props: any) => any;
  getLabel?: (props: any) => any;
  getValue?: (props: any) => any;
  customSelectItem?: ({
    item,
    index,
    selected,
  }: {
    item: any;
    index: any;
    selected: boolean;
  }) => Element;

  multiple?: boolean;
  quickSelect?: boolean;
  quickRemove?: boolean;
}

const Select: React.FC<ISelectProps> = ({
  variant = "standard",
  height = 40,
  label,
  selectText = "Select",
  placeholder,
  iconName = "keyboard-arrow-right",
  className,
  classNameLabel,
  classNameError,
  style,
  styleContent,
  styleList,
  value,
  onChange,
  getLabel = (item) => item?.name,
  getValue = (item) => item?.id,
  source = (paging) => Promise.resolve(),
  transformer = (res) => res,
  keyExtractor = (item, index) => `${item?.id} ${index}`,
  customSelectItem,
  error,
  multiple,
  quickSelect,
  quickRemove,
  isPaging,
}) => {
  const hasBorder =
    variant === "outline" || variant === "pill" || variant === "rounded";
  const containerClass = ClassNames(`w-100`, className);
  const labelClass = ClassNames(
    `h5`,
    {
      "mb-1": hasBorder,
      //   "font-weight-bold": focusing,
    },
    `${classNameLabel}`
  );
  const contentClass = ClassNames("flex-center-y px-1 py-2", {
    "border-bottom": variant === "standard",
    border: variant === "outline",
  });
  const errorClass = ClassNames(
    "mt-1",
    {
      "px-2": variant === "pill",
    },
    classNameError
  );
  const inputHeight = useMemo(() => {
    if (multiple && !_.isEmpty(value)) {
      return undefined;
    }
    return height;
  }, [value, multiple, height]);
  const [openModal, setOpenModal] = useState(false);
  const [selectingValue, setSelectingValue] = useState<any>(value);

  useEffect(() => {
    setSelectingValue(value);
  }, [openModal]);

  const checkSelectedItem = (item: any): boolean => {
    let isSelected = false;
    if (!_.isEmpty(selectingValue)) {
      if (multiple && _.isArray(selectingValue)) {
        isSelected = selectingValue
          .map((i) => getValue(i))
          .includes(getValue(item));
      } else {
        isSelected = getValue(selectingValue) === getValue(item);
      }
    }

    return isSelected;
  };

  const handleSelectItem = (item: any, selected: boolean) => {
    if (quickSelect && !multiple) {
      onChange && onChange(item);
      return setOpenModal(false);
    }
    if (multiple) {
      let arrayClone = [...(selectingValue || [])];
      if (selected) {
        arrayClone = selectingValue.filter(
          (i: any) => getValue(i) !== getValue(item)
        );
      } else {
        arrayClone.push(item);
      }
      setSelectingValue(arrayClone);
    } else if (selected) {
      setSelectingValue({});
    } else {
      setSelectingValue(item);
    }
  };

  const handlePressSelect = () => {
    onChange && onChange(selectingValue);
    setOpenModal(false);
  };

  const renderContent = () => {
    if (_.isEmpty(value)) {
      if (placeholder) {
        return <Text className="text-grey flex-1">{placeholder}</Text>;
      }
    }
    if (multiple && _.isArray(value)) {
      return (
        <View className="flex-wrap flex-row flex-1">
          {value.map((i) => {
            const iLabel = getLabel(i);
            return (
              <Chip
                label={iLabel}
                className="mx-1 my-1"
                iconName={quickRemove ? "close" : undefined}
                onPressIcon={() => {
                  const clone = (value || []).filter(
                    (v) => getValue(v) !== getValue(i)
                  );
                  onChange && onChange(clone);
                }}
              />
            );
          })}
        </View>
      );
    }
    return <Text className="flex-1">{getLabel(value)}</Text>;
  };

  const renderSelectItem = ({ item, index }: any) => {
    const selected = checkSelectedItem(item);
    const selectItemClass = ClassNames("flex-center-y py-3", {
      "border-top": index !== 0,
    });
    let content: any = (
      <View>
        <Text>{getLabel(item)}</Text>
      </View>
    );
    if (customSelectItem) {
      content = customSelectItem({ item, index, selected });
    }

    return (
      <TouchableOpacity
        onPress={() => handleSelectItem(item, selected)}
        className={selectItemClass}
      >
        <View className="flex-1">{content}</View>
        <CheckBox checked={selected} />
      </TouchableOpacity>
    );
  };

  const renderClearButton = () => {
    if (multiple && !_.isEmpty(selectingValue)) {
      return (
        <View>
          <Button
            variant="trans"
            classNameLabel="h5"
            className="px-0 align-self-end"
            iconName="refresh"
            height={20}
            onPress={() => setSelectingValue([])}
          >
            Clear
          </Button>
        </View>
      );
    }
    return <View className="width-30" />;
  };

  return (
    <View className={containerClass} style={style}>
      {label && <Text className={labelClass}>{label}</Text>}
      <TouchableOpacity
        style={[{ height: inputHeight }, styleContent]}
        className={contentClass}
        onPress={() => setOpenModal(true)}
      >
        {renderContent()}
        <Icon name={iconName} />
      </TouchableOpacity>
      {error && <InputErrorView error={error} className={errorClass} />}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        showHeader
        title={label}
        leftIcon="close"
        theme="light"
        customRight={renderClearButton() as any}
        classNameHeader="border-bottom"
        className="px-0"
        swipeable={false}
      >
        <View className="h-100 position-relative">
          {!(quickSelect && !multiple) && (
            <Button
              className="position-absolute bottom-10 w-100 left-0 right-0"
              style={{ zIndex: 10 }}
              height={50}
              onPress={() => handlePressSelect()}
            >
              {selectText}
            </Button>
          )}
          <AwesomeList
            isPaging={isPaging}
            source={source}
            transformer={transformer}
            renderItem={renderSelectItem}
            keyExtractor={keyExtractor}
            className="px-3"
            ListFooterComponent={<View style={{ height: 200 }} />}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Select;
