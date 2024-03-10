import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Rnd, Props as RndProps } from "react-rnd";
import { headerSx, contentSx, titleSx, rndStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import { useProperties } from "./hooks";
import { DEFAULT_WINDOW_BREAKPOINT } from "./commonProps";

export interface BasicWindowProps
  extends WithRequiredProperty<
    Omit<RndProps, "default">,
    "minHeight" | "minWidth"
  > {
  default: {
    width: number | string;
    height: number | string;
  };
  open: boolean;
  contentSxOverride?: any;
  withPortal?: boolean;
  title?: string;
}

export const BasicWindow: FC<BasicWindowProps> = ({
  children,
  open,
  default: defaultProps,
  contentSxOverride,
  withPortal,
  style,
  minWidth,
  minHeight,
  title,
  ...other
}) => {
  const { properties, setProperties } = useProperties({
    width: defaultProps.width,
    height: defaultProps.height,
    minWidth: minWidth,
    minHeight: minHeight,
    open: open,
  });
  const renderWindow = () => {
    return (
      <>
        <Rnd
          bounds="window"
          onDrag={(e: any, d: any) => {
            e.stopImmediatePropagation();
            setProperties((prev) => ({
              ...prev,
              x: d.x,
              y: d.y,
            }));
          }}
          size={{ width: properties.width, height: properties.height }}
          position={{ x: properties.x, y: properties.y }}
          onResizeStop={(
            _: any,
            __: any,
            ref: any,
            ___: any,
            position: any
          ) => {
            setProperties((prev) => ({
              ...prev,
              width: ref.style.width,
              height: ref.style.height,
              ...position,
            }));
          }}
          disableDragging={window.innerWidth < DEFAULT_WINDOW_BREAKPOINT}
          dragHandleClassName="handleHeader"
          minHeight={properties.minHeight}
          minWidth={properties.minWidth}
          {...other}
          style={{ ...rndStyles, ...style }}
        >
          <Box sx={headerSx} className="handleHeader">
            <Typography component={"h2"} sx={titleSx}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ ...contentSx, ...contentSxOverride }}>{children}</Box>
        </Rnd>
      </>
    );
  };
  if (!open) return null;
  return ReactDOM.createPortal(renderWindow(), document.body);
};

export default BasicWindow;
