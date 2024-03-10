import { FC } from "react";
import { Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { computeTagColor } from "./computeTagColor";
import { Tooltip } from "@mui/material";
import { BasicTagWithTooltipProps } from "./Tag.types";

const LibTagWithTooltip: FC<BasicTagWithTooltipProps> = ({
  description,
  deleted,
  readOnly,
  writable,
  selected,
  ...props
}) => {
  const theme = useTheme();
  const color = computeTagColor({ deleted, readOnly, writable, selected });
  return (
    <Tooltip title={description} disableInteractive arrow>
      <Chip
        color={color}
        {...props}
        sx={{
          marginRight: 1,
          marginBottom: 1,
          transition: "none",
          border: `${
            deleted && selected
              ? `3px solid ${theme.palette.error.light}`
              : "3px solid  transparent"
          }`,
          ...props.sx,
        }}
      />
    </Tooltip>
  );
};

export default LibTagWithTooltip;
