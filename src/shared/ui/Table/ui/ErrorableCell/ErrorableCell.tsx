import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import {
  GridEditInputCell,
  GridRenderEditCellParams,
  GridEditBooleanCell,
  GridEditDateCell,
  GridEditSingleSelectCell,
  getGridDefaultColumnTypes,
} from "@mui/x-data-grid";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

export const ErrorableCell = forwardRef<
  HTMLDivElement,
  GridRenderEditCellParams
>((props, ref) => {
  const types = getGridDefaultColumnTypes();
  const { error, colDef } = props;
  console.log("error", error);
  const { type } = colDef;

  if (type === types.boolean.type) {
    return (
      <StyledTooltip open={!!error} title={error} ref={ref}>
        <GridEditBooleanCell {...props} />
      </StyledTooltip>
    );
  }

  if (type === types.date.type) {
    return (
      <StyledTooltip open={!!error} title={error} ref={ref}>
        <GridEditDateCell {...props} />
      </StyledTooltip>
    );
  }

  if (type === types.singleSelect.type) {
    return (
      <StyledTooltip open={!!error} title={error} ref={ref}>
        <GridEditSingleSelectCell {...props} />
      </StyledTooltip>
    );
  }

  return (
    <StyledTooltip open={!!error} title={error} ref={ref}>
      <GridEditInputCell {...props} />
    </StyledTooltip>
  );
});
