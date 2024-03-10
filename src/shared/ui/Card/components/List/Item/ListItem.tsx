import { FC } from "react";
import { ListItem, ListItemProps } from "@mui/material";

const BasicCardListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <ListItem
      disablePadding
      disableGutters
      dense
      sx={{
        width: "100%",
        flexWrap: "wrap",
      }}
      {...props}
    >
      {children}
    </ListItem>
  );
};

export default BasicCardListItem;
