import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconZocial from "react-native-vector-icons/Zocial";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFoundation from "react-native-vector-icons/Foundation";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontFontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import { ThemeProps } from "../../interface/iTheme";
import { ColorKeyType } from "../../style/constant/AppColors";
import { getColorValue } from "../../style/modifier";
import Sizes from "../../style/size/_size";
import { getStyleProps } from "../../style/style";
import TouchableOpacity from "../view/TouchableOpacity";
import { IconProps } from "react-native-vector-icons/Icon";

export declare type IconType =
    | "material"
    | "material-community"
    | "simple-line-icon"
    | "zocial"
    | "font-awesome"
    | "octicon"
    | "ionicon"
    | "foundation"
    | "evilicon"
    | "entypo"
    | "antdesign"
    | "font-awesome-5"
    | "font-awesome-5-pro";

export interface IIconProps
    extends Omit<IconProps, "color">,
        Omit<ThemeProps, "useLightColor"> {
    color?: ColorKeyType;
    className?: string;
    type?: IconType;
    /**
     * className for the TouchableOpacity component wrap outside of the icon,
     * only available when the onPress props has truthy value.
     */
    classNameWrapper?: string;
}

const Icon: React.FC<IIconProps> = ({
    name,
    type,
    style,
    color,
    colorDarkMode,
    size = Sizes.iconSize,
    classNameWrapper,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    ...rest
}) => {
    const transStyle = getStyleProps(rest);
    const isDarkMode = useColorScheme() === "dark";
    const colorIcon = useMemo(() => {
        if (isDarkMode && colorDarkMode) {
            return getColorValue(colorDarkMode);
        }
        return getColorValue(color as any);
    }, [color]);
    const props: IIconProps = {
        style: [transStyle, style],
        name,
        type,
        color: colorIcon,
        size,
        ...rest,
    };
    let icon = <IconMaterialIcons {...props} />;
    switch (type) {
        case "material-community":
            <IconMaterialCommunityIcons {...props} />;
            break;
        case "simple-line-icon":
            <IconSimpleLineIcons {...props} />;
            break;
        case "zocial":
            <IconZocial {...props} />;
            break;
        case "font-awesome":
            <IconFontAwesome {...props} />;
            break;
        case "octicon":
            <IconOcticons {...props} />;
            break;
        case "ionicon":
            <IconIonicons {...props} />;
            break;
        case "foundation":
            <IconFoundation {...props} />;
            break;
        case "evilicon":
            <IconEvilIcons {...props} />;
            break;
        case "entypo":
            <IconEntypo {...props} />;
            break;
        case "antdesign":
            <IconAntDesign {...props} />;
            break;
        case "font-awesome-5":
            <FontAwesome5 {...props} />;
            break;
        case "font-awesome-5-pro":
            <FontFontAwesome5Pro {...props} />;
            break;
        default:
            icon = <IconMaterialIcons {...props} />;
            break;
    }
    if (onPress) {
        return (
            <TouchableOpacity
                onPress={onPress as any}
                onPressIn={onPressIn as any}
                onPressOut={onPressOut as any}
                onLongPress={onPressIn as any}
                colorDarkMode="transparent"
                className={`p-1 rounded-pill ${classNameWrapper}`}
            >
                {icon}
            </TouchableOpacity>
        );
    }

    return icon;
};

export default Icon;
