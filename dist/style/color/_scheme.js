/* eslint-disable import/prefer-default-export */
import _ from "lodash";
import { Appearance } from "react-native";
import Colors from "./_color";
export class SchemaClass {
  schemes = {
    light: {},
    dark: {}
  };
  currentScheme = "default";

  constructor() {
    Object.assign(this, Colors);
    Appearance.addChangeListener(() => {
      if (this.currentScheme === "default") {
        Object.assign(this, this.schemes[Appearance.getColorScheme() ?? "light"]);
      }
    });
  }
  /**
   * Load set of schemes for light/dark mode
   * arguments:
   * schemes - two sets of map of colors e.g {light: {screen: 'white'}, dark: {screen: 'black'}}
   */


  loadSchemes(schemes) {
    const lightSchemeKeys = Object.keys(schemes.light);
    const darkSchemeKeys = Object.keys(schemes.dark);

    const missingKeys = _.xor(lightSchemeKeys, darkSchemeKeys);

    if (!_.isEmpty(missingKeys)) {
      console.error(`There is a mismatch in scheme keys: ${missingKeys.join(", ")}`);
    }

    this.schemes = schemes;
    const colorScheme = this.getScheme();
    Object.assign(this, this.schemes[colorScheme]);
  }
  /**
   * Get app's current color scheme
   */


  getScheme() {
    const scheme = this.currentScheme === "default" ? Appearance.getColorScheme() : this.currentScheme;
    return scheme ?? "light";
  }
  /**
   * Set color scheme for app
   * arguments:
   * scheme - color scheme e.g light/dark/default
   */


  setScheme(scheme) {
    if (!["light", "dark", "default"].includes(scheme)) {
      throw new Error(`${scheme} is invalid colorScheme, please use 'light' | 'dark' | 'default'`);
    }

    this.currentScheme = scheme;
    const colorScheme = this.getScheme();
    Object.assign(this, this.schemes[colorScheme]);
  }

} //@ts-ignore

const Scheme = new SchemaClass();
export default Scheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9jb2xvci9fc2NoZW1lLnRzIl0sIm5hbWVzIjpbIl8iLCJBcHBlYXJhbmNlIiwiQ29sb3JzIiwiU2NoZW1hQ2xhc3MiLCJzY2hlbWVzIiwibGlnaHQiLCJkYXJrIiwiY3VycmVudFNjaGVtZSIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJnZXRDb2xvclNjaGVtZSIsImxvYWRTY2hlbWVzIiwibGlnaHRTY2hlbWVLZXlzIiwia2V5cyIsImRhcmtTY2hlbWVLZXlzIiwibWlzc2luZ0tleXMiLCJ4b3IiLCJpc0VtcHR5IiwiY29uc29sZSIsImVycm9yIiwiam9pbiIsImNvbG9yU2NoZW1lIiwiZ2V0U2NoZW1lIiwic2NoZW1lIiwic2V0U2NoZW1lIiwiaW5jbHVkZXMiLCJFcnJvciIsIlNjaGVtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxDQUFQLE1BQWMsUUFBZDtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7QUFDQSxPQUFPQyxNQUFQO0FBUUEsT0FBTyxNQUFNQyxXQUFOLENBQWtCO0FBR3ZCQyxFQUFBQSxPQUFPLEdBQVk7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsSUFBQUEsSUFBSSxFQUFFO0FBQW5CLEdBQVo7QUFFUEMsRUFBQUEsYUFBYSxHQUFlLFNBQWY7O0FBRWJDLEVBQUFBLFdBQVcsR0FBRztBQUNaQyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CUixNQUFwQjtBQUVBRCxJQUFBQSxVQUFVLENBQUNVLGlCQUFYLENBQTZCLE1BQU07QUFDakMsVUFBSSxLQUFLSixhQUFMLEtBQXVCLFNBQTNCLEVBQXNDO0FBQ3BDRSxRQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FDRSxJQURGLEVBRUUsS0FBS04sT0FBTCxDQUFhSCxVQUFVLENBQUNXLGNBQVgsTUFBK0IsT0FBNUMsQ0FGRjtBQUlEO0FBQ0YsS0FQRDtBQVFEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBRUVDLEVBQUFBLFdBQVcsQ0FBQ1QsT0FBRCxFQUFtQjtBQUM1QixVQUFNVSxlQUFlLEdBQUdMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZWCxPQUFPLENBQUNDLEtBQXBCLENBQXhCO0FBQ0EsVUFBTVcsY0FBYyxHQUFHUCxNQUFNLENBQUNNLElBQVAsQ0FBWVgsT0FBTyxDQUFDRSxJQUFwQixDQUF2Qjs7QUFFQSxVQUFNVyxXQUFXLEdBQUdqQixDQUFDLENBQUNrQixHQUFGLENBQU1KLGVBQU4sRUFBdUJFLGNBQXZCLENBQXBCOztBQUNBLFFBQUksQ0FBQ2hCLENBQUMsQ0FBQ21CLE9BQUYsQ0FBVUYsV0FBVixDQUFMLEVBQTZCO0FBQzNCRyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FDRyx1Q0FBc0NKLFdBQVcsQ0FBQ0ssSUFBWixDQUFpQixJQUFqQixDQUF1QixFQURoRTtBQUdEOztBQUVELFNBQUtsQixPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFNbUIsV0FBVyxHQUFHLEtBQUtDLFNBQUwsRUFBcEI7QUFDQWYsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQixLQUFLTixPQUFMLENBQWFtQixXQUFiLENBQXBCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFQyxFQUFBQSxTQUFTLEdBQXFCO0FBQzVCLFVBQU1DLE1BQU0sR0FDVixLQUFLbEIsYUFBTCxLQUF1QixTQUF2QixHQUNJTixVQUFVLENBQUNXLGNBQVgsRUFESixHQUVJLEtBQUtMLGFBSFg7QUFJQSxXQUFPa0IsTUFBTSxJQUFJLE9BQWpCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRUMsRUFBQUEsU0FBUyxDQUFDRCxNQUFELEVBQXFCO0FBQzVCLFFBQUksQ0FBQyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFNBQWxCLEVBQTZCRSxRQUE3QixDQUFzQ0YsTUFBdEMsQ0FBTCxFQUFvRDtBQUNsRCxZQUFNLElBQUlHLEtBQUosQ0FDSCxHQUFFSCxNQUFPLGtFQUROLENBQU47QUFHRDs7QUFDRCxTQUFLbEIsYUFBTCxHQUFxQmtCLE1BQXJCO0FBQ0EsVUFBTUYsV0FBVyxHQUFHLEtBQUtDLFNBQUwsRUFBcEI7QUFDQWYsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQixLQUFLTixPQUFMLENBQWFtQixXQUFiLENBQXBCO0FBQ0Q7O0FBbkVzQixDLENBcUV6Qjs7QUFDQSxNQUFNTSxNQUFNLEdBQUcsSUFBSTFCLFdBQUosRUFBZjtBQUNBLGVBQWUwQixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQXBwZWFyYW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4vX2NvbG9yXCI7XG5cbnR5cGUgU2NoZW1lcyA9IHtcbiAgbGlnaHQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGRhcms6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59O1xudHlwZSBTY2hlbWVUeXBlID0gXCJkZWZhdWx0XCIgfCBcImxpZ2h0XCIgfCBcImRhcmtcIjtcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUNsYXNzIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHNjaGVtZXM6IFNjaGVtZXMgPSB7IGxpZ2h0OiB7fSwgZGFyazoge30gfTtcblxuICBjdXJyZW50U2NoZW1lOiBTY2hlbWVUeXBlID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBDb2xvcnMpO1xuXG4gICAgQXBwZWFyYW5jZS5hZGRDaGFuZ2VMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2NoZW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdGhpcy5zY2hlbWVzW0FwcGVhcmFuY2UuZ2V0Q29sb3JTY2hlbWUoKSA/PyBcImxpZ2h0XCJdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBzZXQgb2Ygc2NoZW1lcyBmb3IgbGlnaHQvZGFyayBtb2RlXG4gICAqIGFyZ3VtZW50czpcbiAgICogc2NoZW1lcyAtIHR3byBzZXRzIG9mIG1hcCBvZiBjb2xvcnMgZS5nIHtsaWdodDoge3NjcmVlbjogJ3doaXRlJ30sIGRhcms6IHtzY3JlZW46ICdibGFjayd9fVxuICAgKi9cblxuICBsb2FkU2NoZW1lcyhzY2hlbWVzOiBTY2hlbWVzKSB7XG4gICAgY29uc3QgbGlnaHRTY2hlbWVLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1lcy5saWdodCk7XG4gICAgY29uc3QgZGFya1NjaGVtZUtleXMgPSBPYmplY3Qua2V5cyhzY2hlbWVzLmRhcmspO1xuXG4gICAgY29uc3QgbWlzc2luZ0tleXMgPSBfLnhvcihsaWdodFNjaGVtZUtleXMsIGRhcmtTY2hlbWVLZXlzKTtcbiAgICBpZiAoIV8uaXNFbXB0eShtaXNzaW5nS2V5cykpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVyZSBpcyBhIG1pc21hdGNoIGluIHNjaGVtZSBrZXlzOiAke21pc3NpbmdLZXlzLmpvaW4oXCIsIFwiKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZW1lcyA9IHNjaGVtZXM7XG4gICAgY29uc3QgY29sb3JTY2hlbWUgPSB0aGlzLmdldFNjaGVtZSgpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5zY2hlbWVzW2NvbG9yU2NoZW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcCdzIGN1cnJlbnQgY29sb3Igc2NoZW1lXG4gICAqL1xuICBnZXRTY2hlbWUoKTogXCJsaWdodFwiIHwgXCJkYXJrXCIge1xuICAgIGNvbnN0IHNjaGVtZSA9XG4gICAgICB0aGlzLmN1cnJlbnRTY2hlbWUgPT09IFwiZGVmYXVsdFwiXG4gICAgICAgID8gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpXG4gICAgICAgIDogdGhpcy5jdXJyZW50U2NoZW1lO1xuICAgIHJldHVybiBzY2hlbWUgPz8gXCJsaWdodFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb2xvciBzY2hlbWUgZm9yIGFwcFxuICAgKiBhcmd1bWVudHM6XG4gICAqIHNjaGVtZSAtIGNvbG9yIHNjaGVtZSBlLmcgbGlnaHQvZGFyay9kZWZhdWx0XG4gICAqL1xuICBzZXRTY2hlbWUoc2NoZW1lOiBTY2hlbWVUeXBlKSB7XG4gICAgaWYgKCFbXCJsaWdodFwiLCBcImRhcmtcIiwgXCJkZWZhdWx0XCJdLmluY2x1ZGVzKHNjaGVtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7c2NoZW1lfSBpcyBpbnZhbGlkIGNvbG9yU2NoZW1lLCBwbGVhc2UgdXNlICdsaWdodCcgfCAnZGFyaycgfCAnZGVmYXVsdCdgXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRTY2hlbWUgPSBzY2hlbWU7XG4gICAgY29uc3QgY29sb3JTY2hlbWUgPSB0aGlzLmdldFNjaGVtZSgpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5zY2hlbWVzW2NvbG9yU2NoZW1lXSk7XG4gIH1cbn1cbi8vQHRzLWlnbm9yZVxuY29uc3QgU2NoZW1lID0gbmV3IFNjaGVtYUNsYXNzKCk7XG5leHBvcnQgZGVmYXVsdCBTY2hlbWU7XG4iXX0=