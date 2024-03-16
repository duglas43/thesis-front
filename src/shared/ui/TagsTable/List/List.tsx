import React, { FC } from "react";
import { LibTagWithTooltip } from "@shared/ui";
import { Box, CircularProgress } from "@mui/material";
import { TAG_CONTAINER_SX } from "@app/styles";
import { tagsTableListContainerSx, progressSx } from "./styles";
import { SxProps } from "@mui/material";
import { Tag } from "../";
import { useDoubleClick } from "@src/shared/hooks";

export interface TagsTableListProps {
  tags: Extendable<Tag>[];
  selectedIds?: number[];
  onTagClick: (id: number, tag: Extendable<Tag>) => void;
  onDoubleClick?: (id: number, tag: Extendable<Tag>) => void;
  loading: boolean;
  sx?: SxProps;
}
const TagsTableList: FC<TagsTableListProps> = ({
  tags,
  selectedIds,
  onTagClick,
  onDoubleClick,
  loading,
  sx,
}) => {
  return (
    <Box
      sx={
        {
          ...TAG_CONTAINER_SX,
          ...tagsTableListContainerSx,
          ...sx,
        } as SxProps
      }
    >
      {tags.map((tag) => (
        <LibTagWithTooltip
          key={tag.id}
          label={tag.name}
          description={tag.description}
          selected={selectedIds ? selectedIds.includes(tag.id) : false}
          deleted={false}
          readOnly={false}
          writable={false}
          onClick={() => {
            onTagClick(tag.id, tag);
          }}
          onDoubleClick={() => {
            if (loading) return;
            if (!onDoubleClick) return;
            onDoubleClick(tag.id, tag);
          }}
        />
      ))}
      <Box sx={{ ...progressSx, display: loading ? "flex" : "none" }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default React.memo(TagsTableList);
