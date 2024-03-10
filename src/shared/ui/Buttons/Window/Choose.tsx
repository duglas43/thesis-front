import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

const LibButtonsWindowChoose: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return <Button {...props}>{t("ui.choose")}</Button>;
};

export default LibButtonsWindowChoose;
