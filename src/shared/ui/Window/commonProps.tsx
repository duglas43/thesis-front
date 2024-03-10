import { BasicWindowProps } from "./Window";

type PredefinedBasicWindowsProps = Pick<
  BasicWindowProps,
  "default" | "minWidth" | "minHeight" | "withPortal"
>;
export const DEFAULT_WINDOW_BREAKPOINT = 900;
export const WINDOW_DANGER_SX = {
  backgroundColor: "#ffcdd2",
};

export const SMALL_WINDOW_MIN_WIDTH = 230;
export const SMALL_WINDOW_MIN_HEIGHT = 315;

export const SMALL_WINDOW_DEFAULT_WIDTH = 320;
export const SMALL_WINDOW_DEFAULT_HEIGHT = 300;

export const SMALL_WINDOW_DEFAULT_PROPS: BasicWindowProps["default"] = {
  width: SMALL_WINDOW_DEFAULT_WIDTH,
  height: SMALL_WINDOW_DEFAULT_HEIGHT,
};
export const SMALL_WINDOW_PROPS: PredefinedBasicWindowsProps & {
  style: any;
} = {
  default: SMALL_WINDOW_DEFAULT_PROPS,
  minWidth: SMALL_WINDOW_MIN_WIDTH,
  minHeight: SMALL_WINDOW_MIN_HEIGHT,
  style: {
    zIndex: 1201,
  },
  withPortal: true,
};

export const LARGE_WINDOW_DEFAULT_X = window.innerWidth / 2 - 450;
export const LARGE_WINDOW_DEFAULT_Y = window.innerHeight / 2 - 200;

export const LARGE_WINDOW_DEFAULT_WIDTH = 900;
export const LARGE_WINDOW_DEFAULT_HEIGHT = 400;

export const LARGE_WINDOW_MIN_WIDTH = 500;
export const LARGE_WINDOW_MIN_HEIGHT = 400;

export const LARGE_WINDOW_DEFAULT_PROPS: BasicWindowProps["default"] = {
  width: LARGE_WINDOW_DEFAULT_WIDTH,
  height: LARGE_WINDOW_DEFAULT_HEIGHT,
};

export const LARGE_WINDOW_PROPS: PredefinedBasicWindowsProps = {
  default: LARGE_WINDOW_DEFAULT_PROPS,
  minWidth: LARGE_WINDOW_MIN_WIDTH,
  minHeight: LARGE_WINDOW_MIN_HEIGHT,
  withPortal: true,
};

export const VERTICAL_WINDOW_DEFAULT_X = window.innerWidth / 2 - 310;
export const VERTICAL_WINDOW_DEFAULT_Y = window.innerHeight / 2 - 400;

export const VERTICAL_WINDOW_DEFAULT_WIDTH = 620;
export const VERTICAL_WINDOW_DEFAULT_HEIGHT = 800;

export const VERTICAL_WINDOW_MIN_WIDTH = 300;
export const VERTICAL_WINDOW_MIN_HEIGHT = 400;

export const VERTICAL_WINDOW_DEFAULT_PROPS: BasicWindowProps["default"] = {
  width: VERTICAL_WINDOW_DEFAULT_WIDTH,
  height: VERTICAL_WINDOW_DEFAULT_HEIGHT,
};
export const VERTICAL_WINDOW_PROPS: PredefinedBasicWindowsProps = {
  default: VERTICAL_WINDOW_DEFAULT_PROPS,
  minWidth: VERTICAL_WINDOW_MIN_WIDTH,
  minHeight: VERTICAL_WINDOW_MIN_HEIGHT,
  withPortal: true,
};
