import { FC } from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface BasicCardTextProps extends TypographyProps {
  text: any;
}
const BasicCardListItemText: FC<BasicCardTextProps> = ({ text, ...props }) => {
  return (
    <Typography
      component={"span"}
      style={{ fontWeight: "initial", fontSize: "0.9rem" }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default BasicCardListItemText;
