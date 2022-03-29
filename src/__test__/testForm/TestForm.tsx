import React, { useState } from "react";
import Form, { IFormItemData } from "../../component/form/Form";
import ScrollView from "../../component/view/ScrollView";
import { SELECT_DATA } from "../data/TestConstant";

export interface ITestFormProps {
  [key: string]: any;
}

const FORM_DATA: IFormItemData<any>[] = [
  {
    rowsId: "citizenId",
    label: "citizenId",
    type: "inputText",
    key: "citizenId",
  },
  {
    rowsId: "nationality",
    label: "nationality",
    key: "nationality",
    type: "select",
    dataSource: [],
  },
  {
    rowsId: "passportId",
    label: "passportId",
    key: "passportId",
    type: "inputText",
  },
  {
    rowsId: "passportExp",
    label: "passportExp",
    type: "time-range",
    key: "passportExp",
  },
  {
    rowsId: "religion",
    label: "religion",
    key: "religion",
    type: "multi-select",
    dataSource: SELECT_DATA,
    getLabel: (item) => item?.label,
  },
  {
    rowsId: "maritalStatus",
    label: "maritalStatus",
    key: "maritalStatus",
    type: "select",
  },
];

const TestForm: React.FC<ITestFormProps> = ({ id }) => {
  const [formState, setFormState] = useState<any>({});
  return (
    <ScrollView className="w-100">
      <Form
        dataSource={FORM_DATA}
        value={formState}
        onChange={(key, value) => setFormState({ ...formState, [key]: value })}
      />
    </ScrollView>
  );
};

export default TestForm;
