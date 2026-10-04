import { icons, type IconDef } from "./icons";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: IconDef;
  /** Icon size in px; defaults to 22. */
  iconSize?: number;
  /** When set, the whole card links here (opens in a new tab). */
  href?: string;
}

export const projects: Project[] = [
  {
    title: "ArchiWalk iOS App",
    description:
      "An architectural tour app that brings buildings to life through guided experiences. It uses Generative AI platforms to make tours more accessible to the general public.",
    tags: ["Swift", "Python", "Figma"],
    icon: icons.apple,
    iconSize: 17,
    href: "https://www.guides-maker.com/archiwalk",
  },
  {
    title: "Acoustic Localization in IoBT",
    description:
      "DoD-commissioned research in partnership with USC to develop low-cost, interconnected sensor networks capable of detecting and classifying audio sources on the battlefield.",
    tags: ["ROS", "Python", "Linux"],
    icon: icons.speaker,
  },
  {
    title: "3D4E Freehand Group",
    description:
      "Led a team of 8 engineers in partnership with Children's Hospital Los Angeles (CHLA) to design and fabricate 3D-printed prosthetics for pediatric patients with limb differences.",
    tags: ["CAD", "Leadership", "Blender"],
    icon: icons.hand,
  },
];
