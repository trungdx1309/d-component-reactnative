import _pt from "prop-types";
import React from "react";
import { Icon as IconElement } from "react-native-elements";
import { getColorValue } from "../../style/modifier";
import { getStyleProps } from "../../style/style";

const Icon = ({
  name,
  type = "material",
  children,
  style,
  color,
  size = 20,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  const colorIcon = getColorValue(color);
  return <IconElement style={[transStyle, style]} name={name} type={type} color={colorIcon} size={size} {...rest} />;
};

Icon.propTypes = {
  className: _pt.string
};
export default Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnQvaWNvbi9JY29uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb24iLCJJY29uRWxlbWVudCIsImdldENvbG9yVmFsdWUiLCJnZXRTdHlsZVByb3BzIiwibmFtZSIsInR5cGUiLCJjaGlsZHJlbiIsInN0eWxlIiwiY29sb3IiLCJzaXplIiwicmVzdCIsInRyYW5zU3R5bGUiLCJjb2xvckljb24iLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsSUFBSSxJQUFJQyxXQUFqQixRQUErQyx1QkFBL0M7QUFDQSxTQUFTQyxhQUFUO0FBQ0EsU0FBU0MsYUFBVDs7QUFNQSxNQUFNSCxJQUEwQixHQUFHLENBQUM7QUFDbENJLEVBQUFBLElBRGtDO0FBRWxDQyxFQUFBQSxJQUFJLEdBQUcsVUFGMkI7QUFHbENDLEVBQUFBLFFBSGtDO0FBSWxDQyxFQUFBQSxLQUprQztBQUtsQ0MsRUFBQUEsS0FMa0M7QUFNbENDLEVBQUFBLElBQUksR0FBRyxFQU4yQjtBQU9sQyxLQUFHQztBQVArQixDQUFELEtBUTdCO0FBQ0osUUFBTUMsVUFBVSxHQUFHUixhQUFhLENBQUNPLElBQUQsQ0FBaEM7QUFDQSxRQUFNRSxTQUFTLEdBQUdWLGFBQWEsQ0FBQ00sS0FBRCxDQUEvQjtBQUVBLFNBQ0UsQ0FBQyxXQUFELENBQ0UsTUFBTSxDQUFDLENBQUNHLFVBQUQsRUFBYUosS0FBYixDQUFELENBRFIsQ0FFRSxLQUFLLENBQUNILElBQUQsQ0FGUCxDQUdFLEtBQUssQ0FBQ0MsSUFBRCxDQUhQLENBSUUsTUFBTSxDQUFDTyxTQUFELENBSlIsQ0FLRSxLQUFLLENBQUNILElBQUQsQ0FMUCxDQU1FLElBQUlDLElBQUosQ0FORixHQURGO0FBVUQsQ0F0QkQ7OztBQUhFRyxFQUFBQSxTOztBQTJCRixlQUFlYixJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiBhcyBJY29uRWxlbWVudCwgSWNvblByb3BzIH0gZnJvbSBcInJlYWN0LW5hdGl2ZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgZ2V0Q29sb3JWYWx1ZSB9IGZyb20gXCIuLi8uLi9zdHlsZS9tb2RpZmllclwiO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi9zdHlsZS9zdHlsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJY29uUHJvcHMgZXh0ZW5kcyBJY29uUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEljb246IFJlYWN0LkZDPElJY29uUHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgdHlwZSA9IFwibWF0ZXJpYWxcIixcbiAgY2hpbGRyZW4sXG4gIHN0eWxlLFxuICBjb2xvcixcbiAgc2l6ZSA9IDIwLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHRyYW5zU3R5bGUgPSBnZXRTdHlsZVByb3BzKHJlc3QpO1xuICBjb25zdCBjb2xvckljb24gPSBnZXRDb2xvclZhbHVlKGNvbG9yIGFzIGFueSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SWNvbkVsZW1lbnRcbiAgICAgIHN0eWxlPXtbdHJhbnNTdHlsZSwgc3R5bGVdIGFzIGFueX1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY29sb3I9e2NvbG9ySWNvbn1cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdfQ==