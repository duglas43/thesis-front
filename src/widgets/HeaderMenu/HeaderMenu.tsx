import React, { FC } from "react";
import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Box,
  BoxProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useUsersControllerFindMeQuery } from "@entities/users";
import { useAuthControllerLogoutMutation } from "@entities/auth";

export interface HeaderMenuProps extends BoxProps {}
export const HeaderMenu: FC<HeaderMenuProps> = ({ ...boxProps }) => {
  const { t } = useTranslation();
  const { data: me } = useUsersControllerFindMeQuery();
  const [logout] = useAuthControllerLogoutMutation();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    await logout();
    window.localStorage.removeItem("token");
    window.location.reload();
    handleCloseUserMenu();
  };
  return (
    <Box {...boxProps} sx={{ ...boxProps?.sx }}>
      <Tooltip title={t("openSettings")}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {/* <Avatar
            alt={""}
            imgProps={{
              crossOrigin: "anonymous",
            }}
            src={`${process.env.REACT_APP_API_URL}/uploads/${me?.avatar?.fileName}`}
          /> */}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">{t("logout")}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
