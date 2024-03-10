import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import i18n from "@shared/i18n";

const LibButtonsClearFilters: FC<ButtonProps> = (props) => {
  return (
    <Button variant="text" {...props}>
      {i18n.t("ui.clearFilters")}
    </Button>
  );
};

export default LibButtonsClearFilters;
