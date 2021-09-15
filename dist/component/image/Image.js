import _pt from "prop-types";
import React from "react";
import { Image as ImageRN } from "react-native";
import { getStyleProps } from "../../style/style";

const Image = ({
  style,
  children,
  source,
  ...rest
}) => {
  const transStyle = getStyleProps(rest);
  return <ImageRN style={[transStyle, style]} source={source} />;
};

Image.propTypes = {
  className: _pt.string
};
export default Image;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnQvaW1hZ2UvSW1hZ2UudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJJbWFnZVJOIiwiZ2V0U3R5bGVQcm9wcyIsInN0eWxlIiwiY2hpbGRyZW4iLCJzb3VyY2UiLCJyZXN0IiwidHJhbnNTdHlsZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxLQUFLLElBQUlDLE9BQWxCLFFBQTZDLGNBQTdDO0FBQ0EsU0FBU0MsYUFBVDs7QUFNQSxNQUFNRixLQUE0QixHQUFHLENBQUM7QUFBRUcsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxRQUFUO0FBQW1CQyxFQUFBQSxNQUFuQjtBQUEyQixLQUFHQztBQUE5QixDQUFELEtBQTBDO0FBQzdFLFFBQU1DLFVBQVUsR0FBR0wsYUFBYSxDQUFDSSxJQUFELENBQWhDO0FBQ0EsU0FBTyxDQUFDLE9BQUQsQ0FBUyxNQUFNLENBQUMsQ0FBQ0MsVUFBRCxFQUFvQkosS0FBcEIsQ0FBRCxDQUFmLENBQTRDLE9BQU8sQ0FBQ0UsTUFBRCxDQUFuRCxHQUFQO0FBQ0QsQ0FIRDs7O0FBSEVHLEVBQUFBLFM7O0FBUUYsZUFBZVIsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEltYWdlIGFzIEltYWdlUk4sIEltYWdlUHJvcHMgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSBcIi4uLy4uL3N0eWxlL3N0eWxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlUHJvcHMgZXh0ZW5kcyBJbWFnZVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBJbWFnZTogUmVhY3QuRkM8SUltYWdlUHJvcHM+ID0gKHsgc3R5bGUsIGNoaWxkcmVuLCBzb3VyY2UsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCB0cmFuc1N0eWxlID0gZ2V0U3R5bGVQcm9wcyhyZXN0KTtcbiAgcmV0dXJuIDxJbWFnZVJOIHN0eWxlPXtbdHJhbnNTdHlsZSBhcyBhbnksIHN0eWxlXX0gc291cmNlPXtzb3VyY2V9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXX0=