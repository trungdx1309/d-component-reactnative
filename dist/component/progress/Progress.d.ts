import { Component } from "react";
export interface IProgressFunctionProps {
    method: (props?: any, paging?: any, index?: any) => any;
    params: any;
}
export interface IResponseAPI {
    [key: string]: any;
    data?: {
        data?: any;
        pagination?: any;
        [key: string]: any;
    };
    error?: any;
    message?: any;
    status?: any;
}
export interface IProgressProps {
    onSuccess?: (res?: Array<IResponseAPI> | IResponseAPI) => any;
    promiseFunction: Array<IProgressFunctionProps> | IProgressFunctionProps;
    onError?: (props?: any) => any;
    handleError?: (props?: any) => any;
}
export interface IProgressState {
    error?: any;
}
declare class Progress extends Component<IProgressProps, IProgressState> {
    static show(promiseFunction: IProgressProps["promiseFunction"], onSuccess: IProgressProps["onSuccess"], onError?: IProgressProps["onError"], handleError?: IProgressProps["handleError"]): void;
    unmounted: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    setError(error: any): void;
    generatePromiseFunc: (proFunc: IProgressFunctionProps) => any;
    cancel(): void;
    dismiss(): void;
    doTask(): void;
    retry(): void;
    renderLoadingView(): JSX.Element;
    renderHorizontalDivider(): JSX.Element;
    renderVerticalDivider(): JSX.Element;
    render(): JSX.Element;
}
export default Progress;
