import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { Tooltip } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsClone: FC<ButtonProps> = (props) => {
  const { t } = i18n;
  return (
    <Tooltip title={t("buttons.clone")}>
      <Button color="info" size="small" {...props}>
        <i className="fa-solid fa-clone"></i>
      </Button>
    </Tooltip>
  );
};

export default LibButtonsClone;
