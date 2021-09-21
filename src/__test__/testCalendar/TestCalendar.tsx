import React, { useState } from "react";
import Button from "../../component/button/Button";
import Calendar from "../../component/calendar/Calendar";
import ModalCalendar from "../../component/calendar/ModalCalendar";
import View from "../../component/view/View";

export interface ITestCalendarProps {
  [key: string]: any;
}

const TestCalendar: React.FC<ITestCalendarProps> = ({ id }) => {
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  return (
    <View className="my-4">
      <Calendar />
      <ModalCalendar
        open={openCalendarModal}
        onClose={() => setOpenCalendarModal(false)}
      />
      <Button onPress={() => setOpenCalendarModal(true)}>Open Calendar</Button>
    </View>
  );
};

export default TestCalendar;
