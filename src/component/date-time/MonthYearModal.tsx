import moment from "moment";
import React, { useState } from "react";
// @ts-ignore
import MonthPicker from "react-native-month-picker";
import Modal, { IModalProps } from "../modal/Modal";

export interface IMonthYearModalProps extends IModalProps {
  onChange?: (value: Date) => any;
  value?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  prevText?: string;
  nextText?: string;
}

const MonthYearModal: React.FC<IMonthYearModalProps> = ({
  open,
  onClose,
  onChange,
  value,
  minimumDate,
  maximumDate,
  prevText,
  nextText,
}) => {
  const [selectingDate, setSelectingDate] = useState<Date>(
    value || moment().toDate()
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      position="bottom"
      size="medium"
      style={{ marginHorizontal: 0 }}
      swipeable={false}
      showFooter
      onSave={() => {
        onChange && onChange(selectingDate);
        onClose && onClose();
      }}
    >
      <MonthPicker
        selectedDate={selectingDate}
        onMonthChange={(value: any) => {
          const trans = moment(value).toDate();
          setSelectingDate && setSelectingDate(trans);
        }}
        minDate={minimumDate ? moment(minimumDate) : undefined}
        maxDate={
          maximumDate ? moment(maximumDate) : moment().add(1000, "years")
        }
        nextText={nextText}
        prevText={prevText}
      />
    </Modal>
  );
};

export default MonthYearModal;
