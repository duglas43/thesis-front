import { FC } from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface BasicCardRowPropertyPropertyProps extends TypographyProps {
  text: any;
}
const BasicCardListItemProperty: FC<BasicCardRowPropertyPropertyProps> = ({
  text,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: "bold",
        fontSize: "0.9rem",
        display: "inline",
        pr: 1,
        ...props.sx,
      }}
    >
      {`${text} `}
    </Typography>
  );
};

export default BasicCardListItemProperty;
