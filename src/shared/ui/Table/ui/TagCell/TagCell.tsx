import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { PermissionDto } from "@src/entities/users";
import { Autocomplete, TextField } from "@mui/material";

export const TagCell = forwardRef<
  HTMLDivElement,
  GridRenderEditCellParams<PermissionDto>
>(({ error, row, ...props }, ref) => {
  const fields = row.fields || [];

  return (
    <Autocomplete
      multiple
      id="fields"
      freeSolo
      fullWidth
      options={[]}
      value={fields}
      getOptionLabel={(option: any) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          name="fields"
          error={!!error}
          helperText={error}
          value={fields}
        />
      )}
      onChange={(event, newValue) => {
        const fields: any[] = [];
        newValue.forEach((value) => {
          if (typeof value === "string") {
            fields.push({ name: value });
          } else {
            fields.push(value);
          }
        });
        props.api.setEditCellValue({
          id: row.id,
          field: "fields",
          value: fields,
        });
      }}
    />
  );
});
