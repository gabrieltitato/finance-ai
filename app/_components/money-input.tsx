import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { Input, InputProps } from "@/app/_components/ui/input";

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$"
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";
