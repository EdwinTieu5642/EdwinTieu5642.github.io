import { icons, type IconDef } from "./icons";

export interface Social {
  label: string;
  href: string;
  icon: IconDef;
  external: boolean;
}

// Shown as icon buttons in the hero and as text links in the Contact section.
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/EdwinTieu5642", icon: icons.github, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-tieu-2abbd/", icon: icons.linkedin, external: true },
  { label: "Email", href: "mailto:edwindysontieu@gmail.com", icon: icons.mail, external: false },
];
