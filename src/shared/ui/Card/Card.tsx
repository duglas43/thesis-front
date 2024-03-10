import { FC } from "react";
import { StackProps } from "@mui/material";
import { BasicCardContainer } from "./";

export interface BasicCardProps extends StackProps {
  expanded?: boolean;
}
const BasicCard: FC<BasicCardProps> = (props) => {
  return (
    <BasicCardContainer
      className={
        props.expanded ? "basicCardContainer expanded" : "basicCardContainer"
      }
      {...props}
    >
      {props.children}
    </BasicCardContainer>
  );
};

export default BasicCard;
