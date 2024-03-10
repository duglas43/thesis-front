import { ChipProps } from "@mui/material";
export interface BasicTagProps extends ChipProps {
  deleted?: boolean;
  readOnly?: boolean;
  writable?: boolean;
  selected?: boolean;
}
export interface BasicTagWithTooltipProps extends BasicTagProps {
  description: string;
}
