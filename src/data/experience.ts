export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

// Most recent first.
export const experience: Job[] = [
  {
    role: "Embedded Software Engineer",
    company: "Northrop Grumman",
    period: "Aug 2026 – Present",
    location: "Woodland Hills, CA",
    description: "Implemented software on the EGI-M Navigation unit.",
  },
  {
    role: "Embedded Software Engineering Intern",
    company: "Northrop Grumman",
    period: "May 2025 – Jul 2025",
    location: "Woodland Hills, CA",
    description:
      "Diagnosed bugs in an EGI-M navigation unit, automated SPIRENT Simulator communications to double testing throughput, and validated system performance against DOORS requirements.",
  },
  {
    role: "Embedded Software Engineer Intern",
    company: "Northrop Grumman",
    period: "Jun 2024 – Aug 2024",
    location: "Woodland Hills, CA · On-site",
    description:
      "Optimized Tableau dashboards with SQL to improve run times by 103%, integrated and tested an EGI-M navigation system against IBM DOORS requirements, and developed MATLAB test scripts to meet customer specifications.",
  },
  {
    role: "Embedded Software Engineering Intern",
    company: "Northrop Grumman",
    period: "May 2023 – Aug 2023",
    location: "Woodland Hills, CA · On-site",
    description:
      "Automated the lab's inventory tracking system using MATLAB and Confluence REST APIs, developed cybersecurity clearance documentation to streamline government processes, and expanded employee access to 3D printing resources.",
  },
];
