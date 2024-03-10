import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButonHistory: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("buttons.history")}>
      <Button variant="outlined" color="info" {...props}>
        <HistoryIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButonHistory;
