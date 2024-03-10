import { FC } from "react";
import { setTableFiltersField } from "@app/store/slices/tables";
import { LibSelect, LibSelectProps } from "@shared/ui";
import { useAppDispatch } from "@shared/hooks/";

export interface LibSelectFilterProps extends LibSelectProps {
  tableName: string;
  field: string;
  options: anyStringObject;
}
const LibSelectFilter: FC<LibSelectFilterProps> = ({
  tableName,
  field,
  options,
  ...props
}) => {
  const dispatch = useAppDispatch();
  return (
    <LibSelect
      options={options}
      onChange={(e: any) => {
        dispatch(
          setTableFiltersField({
            tableName,
            field,
            value: e.target.value,
          })
        );
      }}
      {...props}
    />
  );
};

export default LibSelectFilter;
