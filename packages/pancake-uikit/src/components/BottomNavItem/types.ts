export interface BottomNavItemProps {
  label: string;
  href: string;
  iconName?: string;
  isActive?: boolean;
  showItemsOnMobile?: boolean;
  isFirst?: boolean;
  theme: "default" | "subMenu" | "green" | "star"
}
