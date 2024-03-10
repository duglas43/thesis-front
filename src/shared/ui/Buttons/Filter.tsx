import { FC } from "react";
import { GridToolbarFilterButton } from "@mui/x-data-grid";

const LibButtonsFilter: FC = () => {
  return (
    <GridToolbarFilterButton
      sx={{
        fontSize: "0",
        "& .MuiButton-startIcon": {
          margin: "0",
        },
        minWidth: "62px !important",
        border: "1px solid rgba(25, 118, 210, 0.5)",
      }}
    />
  );
};

export default LibButtonsFilter;
