import React, { FC } from "react";
import { Box, Drawer, Toolbar } from "@mui/material";
import { Sidebar, CLIENT_SIDEBAR_SHEMA } from "@shared/ui";
import { Header } from "@widgets/Header";
import { Outlet, useLocation } from "react-router-dom";
import { temporaryDrawerSx, permanentDrawerSx, mainSx } from "../styles";
import { useTranslation } from "react-i18next";

export interface AppLayoutProps {}
export const AppLayout: FC<AppLayoutProps> = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignSelf: "stretch", height: "100%" }}>
        <Header
          onDrawerToggle={() => {
            handleDrawerToggle();
          }}
          text={t(
            CLIENT_SIDEBAR_SHEMA.find(
              (item) => item.link === `/${location.pathname.split("/")[1]}`
            )?.text as any
          )}
        />
        <Box
          component="nav"
          sx={{ flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={temporaryDrawerSx}
          >
            <Toolbar />
            <Sidebar schema={CLIENT_SIDEBAR_SHEMA} />
          </Drawer>
          <Drawer variant="permanent" sx={permanentDrawerSx} open>
            <Toolbar />
            <Sidebar schema={CLIENT_SIDEBAR_SHEMA} />
          </Drawer>
        </Box>
        <Box component="main" sx={mainSx}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
