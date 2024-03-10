import { FC } from "react";
import { List, ListProps } from "@mui/material";

const BasicCardList: FC<ListProps> = ({ ...props }) => {
  return (
    <List disablePadding {...props}>
      {props.children}
    </List>
  );
};

export default BasicCardList;
