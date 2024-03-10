import ArticleIcon from "@mui/icons-material/Article";
import ChatIcon from "@mui/icons-material/Chat";
import CloudIcon from "@mui/icons-material/Cloud";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export interface SidebarSchema {
  text: string;
  link: string;
  icon: JSX.Element;
}

export const ADMIN_SIDEBAR_SCHEMA: SidebarSchema[] = [
  {
    text: "Applications",
    link: "/",
    icon: <ArticleIcon />,
  },
  {
    text: "Files",
    link: "/files",
    icon: <CloudIcon />,
  },
  {
    text: "Chat",
    link: "/chat",
    icon: <ChatIcon />,
  },
  {
    text: "Users",
    link: "/users",
    icon: <GroupIcon />,
  },
  {
    text: "Scripts",
    link: "/scripts",
    icon: <TextSnippetIcon />,
  },
  {
    text: "Profile",
    link: "/profile",
    icon: <AccountCircleIcon />,
  },
];
export const ENGINEER_SIDEBAR_SCHEMA: SidebarSchema[] = [
  {
    text: "Applications",
    link: "/",
    icon: <ArticleIcon />,
  },
  {
    text: "Files",
    link: "/files",
    icon: <CloudIcon />,
  },
  {
    text: "Chat",
    link: "/chat",
    icon: <ChatIcon />,
  },
  {
    text: "Profile",
    link: "/profile",
    icon: <AccountCircleIcon />,
  },
];

export const CLIENT_SIDEBAR_SHEMA: SidebarSchema[] = [
  {
    text: "Applications",
    link: "/",
    icon: <ArticleIcon />,
  },
  {
    text: "Chat",
    link: "/chat",
    icon: <ChatIcon />,
  },
  {
    text: "Profile",
    link: "/profile",
    icon: <AccountCircleIcon />,
  },
];
