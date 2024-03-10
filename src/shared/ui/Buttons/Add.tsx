import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsAdd: FC<ButtonProps> = ({ ...props }) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("global.buttons.add")}>
      <Button
        variant="outlined"
        onClick={props.onClick}
        sx={{
          height: "30px",
        }}
        {...props}
      >
        <AddCircleOutlineIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButtonsAdd;
