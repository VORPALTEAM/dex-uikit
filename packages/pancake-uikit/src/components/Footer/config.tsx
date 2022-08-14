import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "",
      },
      {
        label: "Blog",
        href: "",
      },
      {
        label: "Community",
        href: "",
      },
      {
        label: "CAKE",
        href: "",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "",
      },
      {
        label: "Troubleshooting",
        href: "",
      },
      {
        label: "Guides",
        href: "",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/vorpaldao",
      },
      {
        label: "Documentation",
        href: "",
      },
      {
        label: "Bug Bounty",
        href: "",
      },
      {
        label: "Audits",
        href: "",
      },
      {
        label: "Careers",
        href: "",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/pancakeswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/vorpaldao",
      }
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "",
  },
  {
    label: "Github",
    icon: "Github",
    href: "",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
