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
    description:
      "Own end-to-end testing of the Blended Navigation Assurance feature on the EGI-M inertial navigation system. Build and configure test benches and communicate with the unit over MIL-STD-1553 to isolate and diagnose software defects.",
  },
  {
    role: "Embedded Software Engineering Intern",
    company: "Northrop Grumman",
    period: "May 2025 – Jul 2025",
    location: "Woodland Hills, CA",
    description:
      "Traced EGI-M test failures to system software, test station, or Spirent simulator faults. Led a lab-wide initiative to automate Spirent simulator–test station communication and enable 24/7 remote access, doubling testing throughput. Analyzed High-Speed Serial Interface, RS-232, and RS-422 test data to verify the unit met its performance requirements.",
  },
  {
    role: "Embedded Software Engineering Intern",
    company: "Northrop Grumman",
    period: "Jun 2024 – Aug 2024",
    location: "Woodland Hills, CA · On-site",
    description:
      "Optimized the SQL behind Tableau dashboards that every scrum team uses to track requirement counts and velocity, improving run times by 103%. Integrated and tested software on the EGI-M navigation system against IBM DOORS requirements, and developed MATLAB test scripts from system test case requirements.",
  },
  {
    role: "Embedded Software Engineering Intern",
    company: "Northrop Grumman",
    period: "May 2023 – Aug 2023",
    location: "Woodland Hills, CA · On-site",
    description:
      "Automated lab inventory tracking with MATLAB and the Confluence REST API, publishing live equipment status to Confluence. Reviewed next-generation navigation software requirements in IBM DOORS, and created reusable cybersecurity document templates that streamlined clearance between Northrop Grumman and government agencies.",
  },
];
