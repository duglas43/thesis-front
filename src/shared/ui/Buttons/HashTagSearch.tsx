import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsHashTagSearch: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("buttons.filterSearchTags")}>
      <Button color="info" variant="outlined" size="small" {...props}>
        <SearchIcon />
        <i className="fa-solid fa-hashtag"></i>
      </Button>
    </Tooltip>
  );
};

export default LibButtonsHashTagSearch;
