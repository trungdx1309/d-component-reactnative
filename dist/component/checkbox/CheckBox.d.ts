import React from "react";
import { IViewProps } from "../view/View";
export interface ICheckBoxProps extends IViewProps {
    checked?: boolean;
    label?: any;
    onChange?: (props?: any) => any;
    classNameLabel?: string;
    classNameBox?: string;
}
declare const CheckBox: React.FC<ICheckBoxProps>;
export default CheckBox;
