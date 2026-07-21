export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface MegaMenu {
  label: string;
  href: string;
  columns: NavColumn[];
  featured?: {
    title: string;
    description: string;
    href: string;
    image: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenu;
}
