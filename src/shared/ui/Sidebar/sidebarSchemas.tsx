import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BadgeIcon from "@mui/icons-material/Badge";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { IconGroup } from "../IconGroup";

export interface SidebarSchema {
  text: string;
  link: string;
  icon: JSX.Element;
}

export const SIDEBAR_SHEMA: SidebarSchema[] = [
  {
    text: "Users",
    link: "/",
    icon: <PeopleAltIcon />,
  },
  {
    text: "Users Roles",
    link: "/users-roles",
    icon: (
      <IconGroup>
        <PeopleAltIcon />
        <BadgeIcon />
      </IconGroup>
    ),
  },
  {
    text: "Users Permissions",
    link: "/users-permissions",
    icon: (
      <IconGroup>
        <PeopleAltIcon />
        <LockIcon />
      </IconGroup>
    ),
  },
  {
    text: "Roles",
    link: "/roles",
    icon: <BadgeIcon />,
  },
  {
    text: "Roles Permissions",
    link: "/roles-permissions",
    icon: (
      <IconGroup>
        <BadgeIcon />
        <LockIcon />
      </IconGroup>
    ),
  },
  {
    text: "Machines",
    link: "/machines",
    icon: <PrecisionManufacturingIcon />,
  },
  {
    text: "Details",
    link: "/details",
    icon: <SettingsIcon />,
  },
  {
    text: "Profile",
    link: "/profile",
    icon: <AccountCircleIcon />,
  },
];
