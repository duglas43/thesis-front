import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsRestore: FC<ButtonProps> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("buttons.restore")}>
      <Button variant="outlined" color="primary" {...props}>
        <RestoreFromTrashIcon />
      </Button>
    </Tooltip>
  );
};

export default LibButtonsRestore;
