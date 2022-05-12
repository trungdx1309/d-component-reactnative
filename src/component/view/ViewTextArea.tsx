import React, { useMemo, useState } from "react";
import { ViewProps, ViewStyle, TextStyle } from "react-native";
import { ThemeProps } from "../../interface/iTheme";
import { getListStyleProps } from "../../style/style";
import View from "./View";
import Text, { ITextProps } from "../text/Text";
import Button from "../button/Button";
import Modal, { IModalProps } from "../modal/Modal";
import TouchableOpacity from "./TouchableOpacity";

export interface IViewTextAreaProps {
  children: string;
  style?: ViewStyle;
  styleContent?: TextStyle;
  showMoreText?: string;
  showLessText?: string;
  limitedLength?: number;
  className?: string;
  classNameContent?: string;
  classNameShowMore?: string;
  classNameShowLess?: string;
  textContentProps?: ITextProps;
  modalProps?: IModalProps;
  variant?: "modal" | "expand";
}

const ViewTextArea: React.FC<IViewTextAreaProps> = ({
  children,
  style,
  styleContent = {},
  className,
  classNameContent,
  limitedLength = 200,
  textContentProps = {},
  modalProps = {},
  showLessText = "Show Less",
  showMoreText = "Show More",
  variant = "modal",
  ...rest
}) => {
  if (typeof children !== "string") {
    throw Error("children is not string!");
  }

  const textStyle = "h4";

  const isOverFollow = useMemo(() => {
    return children && children?.length > limitedLength;
  }, [children]);
  const [showFullMessage, setShowFullMessage] = useState(false);

  const displayText = useMemo(() => {
    let content = children;
    if (showFullMessage && variant === "expand") {
      return content;
    }
    if (isOverFollow) {
      content = children.substring(0, limitedLength);
    }
    return content;
  }, [children, isOverFollow, showFullMessage]);

  const getShowMoreText = () => {
    if (showFullMessage && variant === "expand") {
      return showLessText;
    }
    return showMoreText;
  };

  const showDot = useMemo(() => {
    if (variant === "expand" && showFullMessage) {
      return false;
    }
    if (isOverFollow) {
      return true;
    }
    return false;
  }, [isOverFollow, showFullMessage]);

  return (
    <React.Fragment>
      <View style={style} className={className}>
        <Text
          className={`${textStyle} ${classNameContent}`}
          style={{ ...styleContent }}
          {...textContentProps}
        >
          {displayText} {showDot && <Text className="text-center">...</Text>}
          {isOverFollow && (
            <TouchableOpacity
              onPress={() => {
                if (variant === "expand") {
                  setShowFullMessage(!showFullMessage);
                } else {
                  setShowFullMessage(true);
                }
              }}
              colorDarkMode="transparent"
            >
              <Text className={`ml-2 text-secondary ${textStyle}`}>
                {getShowMoreText()}
              </Text>
            </TouchableOpacity>
          )}
        </Text>
      </View>
      {showFullMessage && variant === "modal" && (
        <Modal
          open={showFullMessage}
          onClose={() => setShowFullMessage(false)}
          size="medium"
          showFooter
          useScrollView
          showSaveButton={false}
          classNameFooter="justify-content-end"
          {...modalProps}
        >
          <Text className={`${textStyle} mt-2`} colorDarkMode="light">
            {children}
          </Text>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ViewTextArea;
