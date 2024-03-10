import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsParam: FC<ButtonProps> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("buttons.parametr")}>
      <Button variant="outlined" color="primary" {...props}>
        <i className="fa-solid fa-at"></i>
      </Button>
    </Tooltip>
  );
};

export default LibButtonsParam;
