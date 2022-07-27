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
        href: "https://t.me/pancakeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Datch",
        href: "https://t.me/PancakeSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Pancakeswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/PancakeSwapGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/pancakeswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/pancakeswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/pancakeswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/pancakeswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
