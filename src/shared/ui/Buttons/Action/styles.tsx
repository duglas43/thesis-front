import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

export const StyledButtonAction = styled(LoadingButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  justifyContent: "flex-start",
  paddingLeft: "14px",
  textTransform: "none",
  font: "inherit",
  letterSpacing: "inherit",
  "&.Mui-disabled": {
    backgroundColor: theme.palette.grey[300],
    border: `1px solid ${theme.palette.grey[500]}`,
  },
}));
