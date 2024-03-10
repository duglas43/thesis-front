import { FC } from "react";
import { Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { computeTagColor } from "./computeTagColor";
import { BasicTagProps } from "./Tag.types";

const LibTag: FC<BasicTagProps> = ({
  deleted,
  readOnly,
  writable,
  selected,
  ...props
}) => {
  const theme = useTheme();
  const color = computeTagColor({ deleted, readOnly, writable, selected });
  return (
    <Chip
      color={color}
      {...props}
      sx={{
        transition: "none",
        border: `${
          deleted && selected
            ? `3px solid ${theme.palette.error.light}`
            : "3px solid  transparent"
        }`,
        ...props.sx,
      }}
    />
  );
};

export default LibTag;
