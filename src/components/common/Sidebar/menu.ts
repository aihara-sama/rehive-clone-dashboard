import AccountIcon from "components/icons/AccountIcon";
import CodeIcon from "components/icons/CodeIcon";
import CoinsIcon from "components/icons/CoinsIcon";
import GroupsIcon from "components/icons/GroupsIcon";
import HouseIcon from "components/icons/HouseIcon";
import PlusIcon from "components/icons/PlusIcon";
import SettingsIcon from "components/icons/SettingsIcon";
import UsersIcon from "components/icons/UsersIcon";
import type { FunctionComponent } from "react";

interface IMenuItem {
  title: string;
  href: string;
  isExternal?: boolean;
  Icon: FunctionComponent;
  items?: {
    title: string;
    href: string;
    isExternal?: boolean;
  }[];
}

const menu: IMenuItem[] = [
  {
    title: "Get started",
    href: "/get-started",
    Icon: HouseIcon,
  },
  {
    title: "Currencies",
    href: "/currencies",
    Icon: CoinsIcon,
  },
  {
    title: "Accounts",
    href: "/accounts",
    Icon: AccountIcon,
  },
  {
    title: "Users",
    href: "/users",
    Icon: UsersIcon,
  },
  {
    title: "Groups",
    href: "/groups",
    Icon: GroupsIcon,
  },
  {
    title: "Developers",
    href: "/developers",
    Icon: CodeIcon,
    items: [
      {
        title: "Access Control",
        href: "/developers/access-control",
      },
      {
        title: "API Tokens",
        href: "/developers/tokens",
      },
      {
        title: "Request logs",
        href: "/developers/request-logs",
      },
      {
        title: "Webhooks",
        href: "/developers/webhooks",
      },
      {
        title: "Documentation",
        href: "",
        isExternal: true,
      },
      {
        title: "Status page",
        href: "",
        isExternal: true,
      },
    ],
  },
  {
    title: "Extensions",
    href: "/extensions",
    Icon: PlusIcon,
  },
  {
    title: "Settings",
    href: "/settings",
    Icon: SettingsIcon,
  },
];

export { menu };
