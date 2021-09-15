import React from "react";
import { ViewProps } from "react-native";
export interface IViewProps extends ViewProps {
    className?: string;
}
declare const View: React.FC<IViewProps>;
export default View;
