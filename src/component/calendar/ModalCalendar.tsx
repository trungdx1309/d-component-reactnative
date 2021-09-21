import React from "react";
import Modal, { IModalProps } from "../modal/Modal";
import Calendar, { ICalendarProps } from "./Calendar";

export interface IModalCalendarProps
  extends ICalendarProps,
    Pick<
      IModalProps,
      "open" | "onClose" | "size" | "position" | "title" | "onSave" | "leftIcon"
    > {}

const ModalCalendar: React.FC<IModalCalendarProps> = ({
  open,
  onClose,
  size = "large",
  position = "bottom",
  title = "Calendar",
  leftIcon = "close",
  onSave,
  ...rest
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      size={size}
      position={position}
      className="px-0"
      showHeader
      showFooter
      showCancelButton={false}
      title={title}
      onSave={onSave}
      swipeable={false}
      leftIcon={leftIcon}
    >
      <Calendar {...rest} />
    </Modal>
  );
};

export default ModalCalendar;
