import React, { useMemo, useState } from "react";
import { ViewProps, ViewStyle, TextStyle } from "react-native";
import { ThemeProps } from "../../interface/iTheme";
import { getListStyleProps } from "../../style/style";
import View from "./View";
import Text, { ITextProps } from "../text/Text";
import Button from "../button/Button";
import Modal, { IModalProps } from "../modal/Modal";

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

  const isOverFollow = useMemo(() => {
    return children && children?.length > limitedLength;
  }, [children]);
  const [showFullMessage, setShowFullMessage] = useState(false);

  const displayText = useMemo(() => {
    let content = children;
    if (isOverFollow) {
      content = children.substring(0, limitedLength);
    }
    return content;
  }, [children, isOverFollow]);

  return (
    <View style={style} className={className}>
      <Text
        className={classNameContent}
        style={{ maxHeight: 150, ...styleContent }}
        {...textContentProps}
      >
        {displayText} {isOverFollow && <Text>...</Text>}
        {isOverFollow && (
          <Button
            variant="trans"
            size="x-small"
            className="px-0 mt-2 align-self-start"
            color="secondary"
            onPress={() => setShowFullMessage(true)}
          >
            {showMoreText}
          </Button>
        )}
      </Text>
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
          <Text className="text-primary mt-2" colorDarkMode="light">
            {children}
          </Text>
        </Modal>
      )}
    </View>
  );
};

export default ViewTextArea;
