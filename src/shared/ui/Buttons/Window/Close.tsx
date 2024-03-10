import React, { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsWindowClose: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return <Button {...props}>{t("ui.close")}</Button>;
};

export default LibButtonsWindowClose;
