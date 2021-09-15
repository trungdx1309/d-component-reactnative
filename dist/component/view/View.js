import _pt from "prop-types";
import React from "react";
import { View as ViewRN, useColorScheme } from "react-native";
import Colors from "../../style/constant/AppColors";
import { getStyleProps } from "../../style/style";
const {
  dark,
  light
} = Colors;

const View = ({
  children,
  style,
  ...rest
}) => {
  const tranStyle = getStyleProps(rest);
  const isDarkMode = useColorScheme() === "dark";
  const defaultStyle = {
    backgroundColor: isDarkMode ? dark : light
  };
  return <ViewRN style={[defaultStyle, tranStyle, style]} {...rest}>
      {children}
    </ViewRN>;
};

View.propTypes = {
  className: _pt.string
};
export default View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnQvdmlldy9WaWV3LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXciLCJWaWV3Uk4iLCJ1c2VDb2xvclNjaGVtZSIsIkNvbG9ycyIsImdldFN0eWxlUHJvcHMiLCJkYXJrIiwibGlnaHQiLCJjaGlsZHJlbiIsInN0eWxlIiwicmVzdCIsInRyYW5TdHlsZSIsImlzRGFya01vZGUiLCJkZWZhdWx0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsSUFBSSxJQUFJQyxNQUFqQixFQUFvQ0MsY0FBcEMsUUFBMEQsY0FBMUQ7QUFDQSxPQUFPQyxNQUFQO0FBQ0EsU0FBU0MsYUFBVDtBQU1BLE1BQU07QUFBRUMsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQTtBQUFSLElBQWtCSCxNQUF4Qjs7QUFFQSxNQUFNSCxJQUEwQixHQUFHLENBQUM7QUFBRU8sRUFBQUEsUUFBRjtBQUFZQyxFQUFBQSxLQUFaO0FBQW1CLEtBQUdDO0FBQXRCLENBQUQsS0FBa0M7QUFDbkUsUUFBTUMsU0FBUyxHQUFHTixhQUFhLENBQUNLLElBQUQsQ0FBL0I7QUFDQSxRQUFNRSxVQUFVLEdBQUdULGNBQWMsT0FBTyxNQUF4QztBQUNBLFFBQU1VLFlBQVksR0FBRztBQUFFQyxJQUFBQSxlQUFlLEVBQUVGLFVBQVUsR0FBR04sSUFBSCxHQUFVQztBQUF2QyxHQUFyQjtBQUNBLFNBQ0UsQ0FBQyxNQUFELENBQVEsTUFBTSxDQUFDLENBQUNNLFlBQUQsRUFBZUYsU0FBZixFQUEwQkYsS0FBMUIsQ0FBRCxDQUFkLENBQWlELElBQUlDLElBQUosQ0FBakQ7QUFDSixNQUFNLENBQUNGLFFBQUQ7QUFDTixJQUFJLEVBQUUsTUFBRixDQUhGO0FBS0QsQ0FURDs7O0FBTEVPLEVBQUFBLFM7O0FBZ0JGLGVBQWVkLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3IGFzIFZpZXdSTiwgVmlld1Byb3BzLCB1c2VDb2xvclNjaGVtZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4uLy4uL3N0eWxlL2NvbnN0YW50L0FwcENvbG9yc1wiO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi9zdHlsZS9zdHlsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWaWV3UHJvcHMgZXh0ZW5kcyBWaWV3UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHsgZGFyaywgbGlnaHQgfSA9IENvbG9ycztcblxuY29uc3QgVmlldzogUmVhY3QuRkM8SVZpZXdQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc3R5bGUsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCB0cmFuU3R5bGUgPSBnZXRTdHlsZVByb3BzKHJlc3QpO1xuICBjb25zdCBpc0RhcmtNb2RlID0gdXNlQ29sb3JTY2hlbWUoKSA9PT0gXCJkYXJrXCI7XG4gIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiBpc0RhcmtNb2RlID8gZGFyayA6IGxpZ2h0IH07XG4gIHJldHVybiAoXG4gICAgPFZpZXdSTiBzdHlsZT17W2RlZmF1bHRTdHlsZSwgdHJhblN0eWxlLCBzdHlsZV19IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1ZpZXdSTj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXX0=