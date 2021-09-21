import React from "react";
import { StyleSheet } from "react-native";
import RNModal, { ModalProps } from "react-native-modal";
import ClassNames from "classnames";
import SafeAreaView from "../view/SafeAreaView";
import { getStyleProps } from "../../style/style";
import Header, { IHeaderProps } from "../header/Header";
import View from "../view/View";
import ScrollView from "../view/ScrollView";
import Button, { IButtonProps } from "../button/Button";

export interface IModalProps
  extends Omit<ModalProps, "isVisible,children">,
    Omit<IHeaderProps, "children"> {
  open: boolean;
  size?: "fullscreen" | "large" | "medium" | "small";
  className?: string;
  classNameModal?: string;
  classNameContainer?: string;
  classNameHeader?: string;
  classNameFooter?: string;
  cancelText?: string;
  saveText?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  useScrollView?: boolean;
  disabledSave?: boolean;
  onClose?: (props?: any) => void;
  onSave?: (props?: any) => void;
  customHeader?: ((props?: any) => Element) | Element;
  customFooter?: ((props?: any) => Element) | Element;
  cancelButtonProps?: IButtonProps;
  saveButtonProps?: IButtonProps;
}

const Modal: React.FC<IModalProps> = ({
  children,
  open,
  onClose,
  onSave,
  size = "fullscreen",
  showHeader,
  showFooter,
  disabledSave,
  className,
  classNameModal,
  classNameContainer,
  classNameHeader,
  classNameFooter,
  title,
  cancelText = "Cancel",
  saveText = "Save",
  useScrollView,
  cancelButtonProps = {},
  saveButtonProps = {},
  onLeftPress,
  onRightPress,
  customHeader,
  customFooter,
  ...rest
}) => {
  const modalClass = ClassNames(
    "",
    {
      "m-0": size === "fullscreen",
      "mx-4": size === "large",
      "mx-6": size === "medium",
      "mx-10": size === "small",
    },
    classNameModal
  );
  const containerClass = ClassNames(
    { "flex-1": size === "fullscreen" },
    classNameContainer
  );
  const contentClass = ClassNames("w-100 h-100 px-3 py-2", className);

  const headerClass = ClassNames(classNameHeader);
  const footerClass = ClassNames(
    "flex-center-y justify-content-between px-3 py-2",
    classNameFooter
  );

  const renderHeader = () => {
    if (customHeader) {
      if (typeof customHeader === "function") {
        return customHeader();
      }
      return customHeader;
    }
    return (
      <Header
        title={title}
        onLeftPress={() => {
          if (onLeftPress) {
            return onLeftPress();
          }
          onClose && onClose();
        }}
        onRightPress={onRightPress}
        className={headerClass}
      />
    );
  };

  const renderMainView = () => {
    if (useScrollView) {
      return (
        <ScrollView>
          <View className={contentClass}>{children}</View>
        </ScrollView>
      );
    }
    return <View className={contentClass}>{children}</View>;
  };

  const renderFooter = () => {
    if (customFooter) {
      if (typeof customFooter === "function") {
        return customFooter();
      }
      return customFooter;
    }
    return (
      <View className={footerClass}>
        <Button onPress={onClose} color="grey" {...cancelButtonProps}>
          {cancelText}
        </Button>
        <Button disabled={disabledSave} onPress={onSave} {...saveButtonProps}>
          {saveText}
        </Button>
      </View>
    );
  };

  return (
    <ModalTrans
      onSwipeMove={onClose}
      swipeDirection={useScrollView ? undefined : "down"}
      {...rest}
      isVisible={open}
      backdropTransitionInTiming={700}
      backdropTransitionOutTiming={300}
      onBackdropPress={onClose as any}
      hideModalContentWhileAnimating
      className={modalClass}
    >
      <SafeAreaView className={containerClass}>
        {showHeader && renderHeader()}
        {renderMainView()}
        {showFooter && renderFooter()}
      </SafeAreaView>
    </ModalTrans>
  );
};

export default Modal;

const styles = StyleSheet.create({
  fullscreen: {
    margin: 0,
  },
});

export interface IModalTransProps extends ModalProps {
  className?: string;
}

export const ModalTrans: React.FC<IModalTransProps> = ({
  children,
  style,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  return (
    <RNModal style={[transStyle, style]} {...rest}>
      {children}
    </RNModal>
  );
};
