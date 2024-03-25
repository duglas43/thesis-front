import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { IconGroup } from "../IconGroup";

export interface SidebarSchema {
  text: string;
  link: string;
  bindedPageName: string;
  icon: JSX.Element;
}

export const SIDEBAR_SHEMA: SidebarSchema[] = [
  {
    text: "Users",
    link: "/",
    bindedPageName: "Users",
    icon: <PeopleAltIcon />,
  },
  {
    text: "Users Roles",
    link: "/users-roles",
    bindedPageName: "Users-Roles",
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
    bindedPageName: "Users-Permissions",
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
    bindedPageName: "Roles",
    icon: <BadgeIcon />,
  },
  {
    text: "Roles Permissions",
    link: "/roles-permissions",
    bindedPageName: "Roles-Permissions",
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
    bindedPageName: "Machines",
    icon: <PrecisionManufacturingIcon />,
  },
  {
    text: "Details",
    link: "/details",
    bindedPageName: "Details",
    icon: <SettingsIcon />,
  },
  {
    text: "Profile",
    link: "/profile",
    bindedPageName: "Profile",
    icon: <AccountCircleIcon />,
  },
];
