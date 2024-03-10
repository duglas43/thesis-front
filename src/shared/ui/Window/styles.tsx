import { CSSProperties } from "react";
export const headerSx = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "30px",
  width: "100%",
  backgroundColor: "grey.200",
  borderRadius: "4px 4px 0 0",
  borderBottom: "2px solid #e0e0e0",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  cursor: "move",
};

export const contentSx = {
  padding: "0px 8px",
  borderRadius: "0 0 4px 4px",
  position: "absolute",
  top: "30px",
  left: 0,
  right: 0,
  bottom: 0,
};

export const titleSx = {
  fontWeight: "bold",
  ml: 2,
};

export const rndStyles: CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow:
    "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  zIndex: 1200,
};
