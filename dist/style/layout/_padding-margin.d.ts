export declare const PADDING_KEY_PATTERN: RegExp;
export declare const PADDING_VARIATIONS: {
    p: string;
    pl: string;
    pt: string;
    pr: string;
    pb: string;
    px: string;
    py: string;
};
export declare const MARGIN_PADDING_VALUES: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
};
export declare type PaddingLiterals = keyof typeof PADDING_VARIATIONS;
export declare type NativePaddingKeyType = typeof PADDING_VARIATIONS[PaddingLiterals];
export declare type ValueLiterals = keyof typeof MARGIN_PADDING_VALUES;
declare const marginPadding: any;
export default marginPadding;
