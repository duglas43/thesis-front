import { FC } from "react";

import { Button, ButtonProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const LibButtonsSearch: FC<ButtonProps> = (props) => {
  return (
    <Button variant="outlined" color="info" {...props}>
      <SearchIcon />
    </Button>
  );
};

export default LibButtonsSearch;
