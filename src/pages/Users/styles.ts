import { SxProps, Theme } from "@mui/material";

export const pageContainerSx: SxProps<Theme> = (theme: Theme) => ({
  backgroundColor: "white",
  borderRadius: 2,
  p: 2,
  height: "calc(100% - 65px)",
});
