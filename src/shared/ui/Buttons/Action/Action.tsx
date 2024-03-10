import { FC } from "react";
import { LoadingButtonProps } from "@mui/lab";

import { StyledButtonAction } from "./styles";

export interface LibButtonsActionProps extends LoadingButtonProps {}

const LibButtonsAction: FC<LibButtonsActionProps> = (props) => {
  return (
    <StyledButtonAction
      variant={"outlined"}
      color={"inherit"}
      fullWidth
      {...props}
    >
      {props.children}
    </StyledButtonAction>
  );
};

export default LibButtonsAction;
