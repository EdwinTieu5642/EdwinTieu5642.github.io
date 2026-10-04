import { icons, type IconDef } from "./icons";

export interface SkillGroup {
  title: string;
  icon: IconDef;
  /** `level` is a 0–100 percentage that sets the bar width. */
  items: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Embedded Systems",
    icon: icons.brain,
    items: [
      { name: "Verilog", level: 92 },
      { name: "Digital Hardware Architecture", level: 90 },
      { name: "FPGA Development", level: 88 },
      { name: "Embedded C/C++", level: 86 },
      { name: "High-Level Synthesis", level: 82 },
    ],
  },
  {
    title: "Web / App Development",
    icon: icons.globe,
    items: [
      { name: "Python", level: 95 },
      { name: "PyTorch", level: 90 },
      { name: "REST APIs & Networking", level: 85 },
      { name: "Data Engineering & Analytics", level: 78 },
      { name: "Full-Stack Application Development", level: 72 },
    ],
  },
  {
    title: "Infrastructure",
    icon: icons.database,
    items: [
      { name: "Computer Networking", level: 92 },
      { name: "Distributed Systems Concepts", level: 84 },
      { name: "CUDA / GPU Computing", level: 83 },
      { name: "Linux Systems & Dev Environment", level: 82 },
      { name: "AI Infrastructure & Model Deployment", level: 80 },
    ],
  },
];
