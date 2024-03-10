import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsHashTag: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("buttons.searchTags")}>
      <Button variant="outlined" color="info" {...props}>
        <i className="fa-solid fa-hashtag"></i>
      </Button>
    </Tooltip>
  );
};

export default LibButtonsHashTag;
