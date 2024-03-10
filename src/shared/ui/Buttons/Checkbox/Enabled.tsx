import React from "react";
import { Button, ButtonProps } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsCheckBoxEnabled = (props: ButtonProps) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("buttons.checkboxEnabled")}>
      <Button color="info" size="small" variant="outlined" {...props}>
        <CheckBoxOutlinedIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButtonsCheckBoxEnabled;
