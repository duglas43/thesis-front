import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsDelete: FC<ButtonProps> = (props) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("buttons.delete")}>
      <Button
        variant="outlined"
        color="error"
        sx={{
          height: "30px",
        }}
        {...props}
      >
        <DeleteOutlineIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButtonsDelete;
