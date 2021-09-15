import React from "react";
import { ViewProps } from "react-native";
export interface ISafeAreaViewProps extends ViewProps {
    className?: string;
    children?: any;
}
declare const SafeAreaView: React.FC<ISafeAreaViewProps>;
export default SafeAreaView;
