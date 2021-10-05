import React, {
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import ClassNames from "classnames";
import _ from "lodash";
import Text from "../text/Text";
import View from "../view/View";
import InputDate, { IInputDateProps } from "./InputDate";
import { InputErrorView } from "./InputText";
import Icon from "../icon/Icon";
import TimeUtils from "../../utils/TimeUtils";

export interface IInputDateRangeProps
  extends Omit<IInputDateProps, "value" | "onChange"> {
  value?: any[];
  onChange?: (props: IInputDateRangeProps["value"]) => any;
  startText?: string;
  endText?: string;
}

export interface IInputDateRangeMethod {}

const InputDateRange: React.ForwardRefRenderFunction<
  IInputDateRangeMethod,
  IInputDateRangeProps
> = (
  {
    className,
    classNameLabel,
    classNameError,
    error,
    variant = "outline",
    label,
    value,
    onChange,
    startText = "Start",
    endText = "End",
    ...rest
  },
  ref
) => {
  const hasBorder =
    variant === "outline" || variant === "pill" || variant === "rounded";
  const labelClass = ClassNames(
    `h5`,
    { "mb-1": hasBorder },
    `${classNameLabel}`
  );

  const errorClass = ClassNames(
    "mt-1",
    {
      "px-2": variant === "pill",
    },
    classNameError
  );

  const endRef = useRef<ElementRef<typeof InputDate>>(null);

  useImperativeHandle(ref, () => ({}));

  const handleChangeStartTime = (start: any) => {
    const clone: any = [...(value || [])];
    clone[0] = start;
    if (
      clone[1] &&
      TimeUtils.convertDateTimeToMili(start) >
        TimeUtils.convertDateTimeToMili(clone[1])
    ) {
      clone[1] = undefined;
    }
    onChange && onChange(clone);
    endRef.current && endRef.current.open();
  };

  const handleChangeEndTime = (end: any) => {
    const clone: any = [...(value || [])];
    clone[1] = end;
    onChange && onChange(clone);
  };

  return (
    <View className={className}>
      {label && <Text className={labelClass}>{label}</Text>}
      <View className="flex-center-y">
        <InputDate
          variant={variant}
          className="flex-1"
          classNameText="text-center"
          showIcon={false}
          onChange={(v) => handleChangeStartTime(v)}
          value={value?.[0]}
          placeholder={startText}
          {...rest}
        />
        <Icon
          name="arrow-forward"
          className="mx-2"
          color={_.isEmpty(value) ? "gray" : undefined}
        />
        <InputDate
          variant={variant}
          className="flex-1"
          classNameText="text-center"
          showIcon={false}
          onChange={(v) => handleChangeEndTime(v)}
          minimumDate={value?.[0]}
          value={value?.[1]}
          placeholder={endText}
          ref={endRef}
          {...rest}
        />
      </View>
      {error && <InputErrorView error={error} className={errorClass} />}
    </View>
  );
};

export default forwardRef(InputDateRange);
