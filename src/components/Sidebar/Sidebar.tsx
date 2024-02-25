import React, { FC } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarSchema } from "./sidebarSchemas";
import { useTranslation } from "react-i18next";

export interface SidebarProps {
  schema: SidebarSchema[];
}

export const Sidebar: FC<SidebarProps> = ({ schema }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleListItemClick = (link: string) => {
    navigate(link);
  };
  return (
    <nav style={{ width: "100%", marginBlockStart: "10px" }}>
      <List sx={{ width: "100%" }}>
        {schema.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={`/${location.pathname.split("/")[1]}` === item.link}
              onClick={() => {
                handleListItemClick(item.link);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
