import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsCheckBoxDisabled: FC<ButtonProps> = (props) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("buttons.checkboxDisabled")}>
      <Button color="info" size="small" variant="outlined" {...props}>
        <CheckBoxOutlineBlankOutlinedIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButtonsCheckBoxDisabled;
