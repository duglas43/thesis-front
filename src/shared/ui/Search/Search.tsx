import React from "react";
import { LibInputProps, LibInput } from "@shared/ui";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";

export type LibSearchProps = {
  value?: string;
  label?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
} & Omit<LibInputProps, "onChange">;
export const LibSearch = ({
  value = "",
  label,
  onChange,
  disabled,
  ...props
}: LibSearchProps) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = React.useState<string>("");
  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      if (onChange) onChange(value);
    }, 200),
    []
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <React.Fragment>
      <LibInput
        value={inputValue}
        disabled={disabled}
        variant={`${disabled ? "filled" : "outlined"}`}
        label={t("ui.search")}
        size="small"
        sx={{ width: "100%" }}
        onChange={onChangeInput}
        {...props}
      />
    </React.Fragment>
  );
};

export default LibSearch;
