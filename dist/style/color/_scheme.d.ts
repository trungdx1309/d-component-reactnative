declare type Schemes = {
    light: {
        [key: string]: string;
    };
    dark: {
        [key: string]: string;
    };
};
declare type SchemeType = "default" | "light" | "dark";
export declare class SchemaClass {
    [key: string]: any;
    schemes: Schemes;
    currentScheme: SchemeType;
    constructor();
    /**
     * Load set of schemes for light/dark mode
     * arguments:
     * schemes - two sets of map of colors e.g {light: {screen: 'white'}, dark: {screen: 'black'}}
     */
    loadSchemes(schemes: Schemes): void;
    /**
     * Get app's current color scheme
     */
    getScheme(): "light" | "dark";
    /**
     * Set color scheme for app
     * arguments:
     * scheme - color scheme e.g light/dark/default
     */
    setScheme(scheme: SchemeType): void;
}
declare const Scheme: any;
export default Scheme;
