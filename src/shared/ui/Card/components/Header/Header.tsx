import { FC } from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface BasicCardHeaderProps extends TypographyProps {
  title: any;
  component?: any;
}
const BasicCardHeader: FC<BasicCardHeaderProps> = ({ title, ...props }) => {
  return (
    <Typography
      component={"h2"}
      {...props}
      sx={{
        fontWeight: "bold",
        textAlign: "right",
        ...props.sx,
      }}
    >
      {title}
    </Typography>
  );
};

export default BasicCardHeader;
