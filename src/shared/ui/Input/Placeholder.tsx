import { FC } from "react";
import LibInput from "./Input";
import { TextFieldProps } from "@mui/material";

const LibInputPlaceholder: FC<TextFieldProps> = (props) => {
  return <LibInput disabled={true} {...props} />;
};

export default LibInputPlaceholder;
