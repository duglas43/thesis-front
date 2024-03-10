import { FC } from "react";
import { ButtonProps } from "@mui/material";
import { GridToolbarDensitySelector } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsDensitySelector: FC<ButtonProps> = (props) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("buttons.density")}>
      <GridToolbarDensitySelector
        variant="outlined"
        sx={{
          fontSize: "0",
          "& .MuiButton-startIcon": {
            margin: "0",
          },
          minWidth: "62px !important",
          border: "1px solid rgba(25, 118, 210, 0.5)",
          ...props.sx,
        }}
        {...props}
      />
    </Tooltip>
  );
};

export default LibButtonsDensitySelector;
