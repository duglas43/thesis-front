import React, { FC } from "react";
import { Box, Stack } from "@mui/material";
import { LibButtonsAdd, LibButtonsDelete } from "@shared/ui";

export interface TagsTableToolbarProps {
  onAddButtonClick: () => void;
  onDeleteButtonClick: () => void;
  deleteButtonEnabled: boolean;
}
const TagsTableToolbar: FC<TagsTableToolbarProps> = ({
  onAddButtonClick,
  onDeleteButtonClick,
  deleteButtonEnabled,
}) => {
  return (
    <Box sx={{ my: 1 }}>
      <Stack direction={"row"} spacing={2}>
        <LibButtonsAdd onClick={onAddButtonClick} />
        <LibButtonsDelete
          onClick={onDeleteButtonClick}
          disabled={!deleteButtonEnabled}
        />
      </Stack>
    </Box>
  );
};

export default React.memo(TagsTableToolbar);
