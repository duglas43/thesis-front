import { SxProps, Theme } from "@mui/system";

export const centerContainerSx: SxProps<Theme> = () => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: 2,
});
export const pageContainerSx: SxProps<Theme> = (theme: Theme) => ({
  height: {
    xs: "unset",
    md: "calc(100% - 65px)",
  },
  pb: {
    xs: 2,
    md: 0,
  },
});
export const pageItemSx: SxProps<Theme> = (theme: Theme) => ({
  height: {
    xs: "calc(100vh - 100px)",
    md: "100%",
  },
});
export const containerSx = {
  p: 2,
  borderRadius: 2,
  backgroundColor: "white",
  overflow: "hidden",
  height: "100%",
};
export const tableContainerSx: SxProps<Theme> = (theme: any) => ({
  height: "100%",
  width: {
    xs: "calc(100vw - 60px)",
    md: `calc(100vw - 60px - ${theme.drawerWidth}px)`,
  },
});

export const CARD_HEIGHT_XS = "500px";
export const CARD_HEIGHT_MD = "calc(100vh - 75px)";
export const FULL_HEIGHT_CARD = {
  xs: CARD_HEIGHT_XS,
  md: CARD_HEIGHT_MD,
};
export const TAG_LIST_HEIGHT = "calc(100% - 105.5px)";
export const TAG_LIST_IN_CARD_HEIGHT = "calc(100% - 140px)";
export const TAG_LIST_SX = {
  height: TAG_LIST_HEIGHT,
};
export const TAG_LIST_IN_CARD_SX = {
  height: TAG_LIST_IN_CARD_HEIGHT,
};
export const CONTAINER_SX = {
  p: 2,
  backgroundColor: "white",
  borderRadius: 2,
  border: "1px solid #a3cae9",
};
export const TAG_CONTAINER_SX = {
  border: "1px solid #bdbdbd",
  width: "100%",
  backgroundColor: "white",
  borderRadius: 1,
  px: 1,
  pt: 1,
};
export const PAGE_GRID_CONTAINER_SX = {
  pt: 2,
};

export const PAGE_GRID_ITEM_SX = {
  pt: {
    xs: "unset",
    md: "0 !important",
  },
  height: FULL_HEIGHT_CARD,
};
export const PAGE_SCROLLABLE_GRID_ITEM_SX = {
  ...PAGE_GRID_ITEM_SX,
  height: {
    xs: "auto",
    md: CARD_HEIGHT_MD,
  },
  overflowY: "scroll",
};

export const TABLE_CONTAINER_SX = {
  ...CONTAINER_SX,
  height: "100%",
};

export const INFO_TABLE_HEIGHT = "150px";
export const INFO_TABLE_WRAPPER_SX = {
  height: INFO_TABLE_HEIGHT,
  flexBasis: INFO_TABLE_HEIGHT,
  flexGrow: 2,
};
