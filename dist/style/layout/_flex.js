import { StyleSheet } from "react-native";
import { generateStyleValue } from "../modifier";
export const FLEX_VALUE = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10
};
const flexValueClass = generateStyleValue({
  flex: "flex"
}, FLEX_VALUE);
const flexStyle = StyleSheet.create({
  //flex
  "flex-1": {
    flex: 1
  },
  "flex-row": {
    flexDirection: "row"
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse"
  },
  "flex-column": {
    flexDirection: "column"
  },
  "flex-column-reverse": {
    flexDirection: "column-reverse"
  },
  "flex-center-y": {
    flexDirection: "row",
    alignItems: "center"
  },
  "flex-center-x": {
    flexDirection: "column",
    alignItems: "center"
  },
  // align
  "align-center": {
    alignItems: "center"
  },
  "align-end": {
    alignItems: "flex-end"
  },
  "align-start": {
    alignItems: "flex-start"
  },
  "align-base": {
    alignItems: "baseline"
  },
  "align-stretch": {
    alignItems: "stretch"
  },
  "align-self-center": {
    alignSelf: "center"
  },
  "align-self-end": {
    alignSelf: "flex-end"
  },
  "align-self-start": {
    alignSelf: "flex-start"
  },
  "align-self-base": {
    alignSelf: "baseline"
  },
  "align-self-stretch": {
    alignSelf: "stretch"
  },
  //justify-content
  "justify-content-center": {
    justifyContent: "center"
  },
  "justify-content-end": {
    justifyContent: "flex-end"
  },
  "justify-content-start": {
    justifyContent: "flex-start"
  },
  "justify-content-between": {
    justifyContent: "space-between"
  },
  "justify-content-evenly": {
    justifyContent: "space-evenly"
  },
  "justify-content-around": {
    justifyContent: "space-around"
  },
  ...flexValueClass
});
export default flexStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9sYXlvdXQvX2ZsZXgudHMiXSwibmFtZXMiOlsiU3R5bGVTaGVldCIsImdlbmVyYXRlU3R5bGVWYWx1ZSIsIkZMRVhfVkFMVUUiLCJmbGV4VmFsdWVDbGFzcyIsImZsZXgiLCJmbGV4U3R5bGUiLCJjcmVhdGUiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxVQUFULFFBQTJCLGNBQTNCO0FBQ0EsU0FBU0Msa0JBQVQ7QUFFQSxPQUFPLE1BQU1DLFVBQVUsR0FBRztBQUN4QixLQUFHLENBRHFCO0FBRXhCLEtBQUcsQ0FGcUI7QUFHeEIsS0FBRyxDQUhxQjtBQUl4QixLQUFHLENBSnFCO0FBS3hCLEtBQUcsQ0FMcUI7QUFNeEIsS0FBRyxDQU5xQjtBQU94QixLQUFHLENBUHFCO0FBUXhCLEtBQUcsQ0FScUI7QUFTeEIsS0FBRyxDQVRxQjtBQVV4QixNQUFJO0FBVm9CLENBQW5CO0FBYVAsTUFBTUMsY0FBYyxHQUFHRixrQkFBa0IsQ0FBQztBQUFFRyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFELEVBQW1CRixVQUFuQixDQUF6QztBQUVBLE1BQU1HLFNBQVMsR0FBR0wsVUFBVSxDQUFDTSxNQUFYLENBQWtCO0FBQ2xDO0FBRUEsWUFBVTtBQUNSRixJQUFBQSxJQUFJLEVBQUU7QUFERSxHQUh3QjtBQU9sQyxjQUFZO0FBQ1ZHLElBQUFBLGFBQWEsRUFBRTtBQURMLEdBUHNCO0FBV2xDLHNCQUFvQjtBQUNsQkEsSUFBQUEsYUFBYSxFQUFFO0FBREcsR0FYYztBQWVsQyxpQkFBZTtBQUNiQSxJQUFBQSxhQUFhLEVBQUU7QUFERixHQWZtQjtBQW1CbEMseUJBQXVCO0FBQ3JCQSxJQUFBQSxhQUFhLEVBQUU7QUFETSxHQW5CVztBQXVCbEMsbUJBQWlCO0FBQ2ZBLElBQUFBLGFBQWEsRUFBRSxLQURBO0FBRWZDLElBQUFBLFVBQVUsRUFBRTtBQUZHLEdBdkJpQjtBQTJCbEMsbUJBQWlCO0FBQ2ZELElBQUFBLGFBQWEsRUFBRSxRQURBO0FBRWZDLElBQUFBLFVBQVUsRUFBRTtBQUZHLEdBM0JpQjtBQWdDbEM7QUFFQSxrQkFBZ0I7QUFDZEEsSUFBQUEsVUFBVSxFQUFFO0FBREUsR0FsQ2tCO0FBcUNsQyxlQUFhO0FBQ1hBLElBQUFBLFVBQVUsRUFBRTtBQURELEdBckNxQjtBQXdDbEMsaUJBQWU7QUFDYkEsSUFBQUEsVUFBVSxFQUFFO0FBREMsR0F4Q21CO0FBMkNsQyxnQkFBYztBQUNaQSxJQUFBQSxVQUFVLEVBQUU7QUFEQSxHQTNDb0I7QUE4Q2xDLG1CQUFpQjtBQUNmQSxJQUFBQSxVQUFVLEVBQUU7QUFERyxHQTlDaUI7QUFpRGxDLHVCQUFxQjtBQUNuQkMsSUFBQUEsU0FBUyxFQUFFO0FBRFEsR0FqRGE7QUFvRGxDLG9CQUFrQjtBQUNoQkEsSUFBQUEsU0FBUyxFQUFFO0FBREssR0FwRGdCO0FBdURsQyxzQkFBb0I7QUFDbEJBLElBQUFBLFNBQVMsRUFBRTtBQURPLEdBdkRjO0FBMERsQyxxQkFBbUI7QUFDakJBLElBQUFBLFNBQVMsRUFBRTtBQURNLEdBMURlO0FBNkRsQyx3QkFBc0I7QUFDcEJBLElBQUFBLFNBQVMsRUFBRTtBQURTLEdBN0RZO0FBaUVsQztBQUVBLDRCQUEwQjtBQUN4QkMsSUFBQUEsY0FBYyxFQUFFO0FBRFEsR0FuRVE7QUFzRWxDLHlCQUF1QjtBQUNyQkEsSUFBQUEsY0FBYyxFQUFFO0FBREssR0F0RVc7QUF5RWxDLDJCQUF5QjtBQUN2QkEsSUFBQUEsY0FBYyxFQUFFO0FBRE8sR0F6RVM7QUE0RWxDLDZCQUEyQjtBQUN6QkEsSUFBQUEsY0FBYyxFQUFFO0FBRFMsR0E1RU87QUErRWxDLDRCQUEwQjtBQUN4QkEsSUFBQUEsY0FBYyxFQUFFO0FBRFEsR0EvRVE7QUFrRmxDLDRCQUEwQjtBQUN4QkEsSUFBQUEsY0FBYyxFQUFFO0FBRFEsR0FsRlE7QUFzRmxDLEtBQUdQO0FBdEYrQixDQUFsQixDQUFsQjtBQXlGQSxlQUFlRSxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCB7IGdlbmVyYXRlU3R5bGVWYWx1ZSB9IGZyb20gXCIuLi9tb2RpZmllclwiO1xuXG5leHBvcnQgY29uc3QgRkxFWF9WQUxVRSA9IHtcbiAgMTogMSxcbiAgMjogMixcbiAgMzogMyxcbiAgNDogNCxcbiAgNTogNSxcbiAgNjogNixcbiAgNzogNyxcbiAgODogOCxcbiAgOTogOSxcbiAgMTA6IDEwLFxufTtcblxuY29uc3QgZmxleFZhbHVlQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoeyBmbGV4OiBcImZsZXhcIiB9LCBGTEVYX1ZBTFVFKTtcblxuY29uc3QgZmxleFN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAvL2ZsZXhcblxuICBcImZsZXgtMVwiOiB7XG4gICAgZmxleDogMSxcbiAgfSxcblxuICBcImZsZXgtcm93XCI6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICB9LFxuXG4gIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgZmxleERpcmVjdGlvbjogXCJyb3ctcmV2ZXJzZVwiLFxuICB9LFxuXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG5cbiAgXCJmbGV4LWNvbHVtbi1yZXZlcnNlXCI6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXG4gIH0sXG5cbiAgXCJmbGV4LWNlbnRlci15XCI6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIFwiZmxleC1jZW50ZXIteFwiOiB7XG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuXG4gIC8vIGFsaWduXG5cbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIFwiYWxpZ24tZW5kXCI6IHtcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gIH0sXG4gIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICB9LFxuICBcImFsaWduLWJhc2VcIjoge1xuICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgfSxcbiAgXCJhbGlnbi1zdHJldGNoXCI6IHtcbiAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcbiAgfSxcbiAgXCJhbGlnbi1zZWxmLWNlbnRlclwiOiB7XG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICB9LFxuICBcImFsaWduLXNlbGYtZW5kXCI6IHtcbiAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIixcbiAgfSxcbiAgXCJhbGlnbi1zZWxmLXN0YXJ0XCI6IHtcbiAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICB9LFxuICBcImFsaWduLXNlbGYtYmFzZVwiOiB7XG4gICAgYWxpZ25TZWxmOiBcImJhc2VsaW5lXCIsXG4gIH0sXG4gIFwiYWxpZ24tc2VsZi1zdHJldGNoXCI6IHtcbiAgICBhbGlnblNlbGY6IFwic3RyZXRjaFwiLFxuICB9LFxuXG4gIC8vanVzdGlmeS1jb250ZW50XG5cbiAgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgXCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICB9LFxuICBcImp1c3RpZnktY29udGVudC1zdGFydFwiOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICB9LFxuICBcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIH0sXG4gIFwianVzdGlmeS1jb250ZW50LWV2ZW5seVwiOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXG4gIH0sXG4gIFwianVzdGlmeS1jb250ZW50LWFyb3VuZFwiOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gIH0sXG5cbiAgLi4uZmxleFZhbHVlQ2xhc3MsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZmxleFN0eWxlO1xuIl19