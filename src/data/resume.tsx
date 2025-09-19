import { Icons } from "@/components/icons";
import { FaHouse, FaBook } from "react-icons/fa6";

export const DATA = {
  name: "Mohammad Adeem",
  initials: "MA",
  url: "https://github.com/WebiAdeem",
  location: "",
  locationLink: "",
  description:
    "MCA student and CS graduate skilled in web dev and data analysis.",
  summary:
    "MCA student and Computer Science graduate with strong foundations in programming, data structures, and data analysis. Proficient in C, Java, Python, JavaScript, TypeScript, SQL, and frameworks like React, Tailwind CSS, and Node.js. Experienced in developing scalable web applications, analyzing datasets using Python and Power BI, and collaborating in Agile environments.",
  avatarUrl: "/profile.jpg",
  skills: [
    "C",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Oracle",
    "SQL",
    "Git",
    "Power BI",
    "Excel",
    "Tableau",
  ],
  skillsDetailed: {
    "Programming Languages": [
      "C",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
    ],
    "Web Technologies": [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    Databases: ["Oracle", "SQL"],
    "Tools & Platforms": ["Git", "Power BI", "Excel", "Tableau"],
  },
  navbar: [
    { href: "/", icon: FaHouse, label: "Home" },
    { href: "/blog", icon: FaBook, label: "Blog" },
  ],
  contact: {
    email: "adeemmohammad3@gmail.com",
    tel: "6386286348",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/WebiAdeem",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammadadeem",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:adeemmohammad3@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "St. Aloysius High School",
      href: "#",
      degree: "High School",
      logoUrl: "",
      start: "2009",
      end: "2020",
    },
    {
      school: "Dr. Virendra Swarup Institute",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "",
      start: "2020",
      end: "2023",
    },
    {
      school: "Pranveer Singh Institute of Technology (PSIT)",
      href: "#",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "",
      start: "2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "FocusFeed",
      href: "https://focusfeed-daily-glance.vercel.app/",
      dates: "—",
      active: true,
      description:
        "A modern, responsive news and content platform to showcase news, articles, and insights with a clean, modern design.\n\nFeatures:\n- Responsive layouts for all devices\n- Modern UI with clean typography and spacing\n- Dynamic article loading and filtering\n- Dedicated pages for work, services, team\n- Custom 404 page\n- Newsletter subscription\n- Contact form with validation",
      technologies: [
        "Vite",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://focusfeed-daily-glance.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/focus.png",
    },
    {
      title: "iPhone Sales Data Analysis",
      href: "#",
      dates: "—",
      active: true,
      description:
        "Collected and analyzed 2,000+ iPhone sales records from an open dataset.\n- Cleaned raw data using Python (Pandas, NumPy), reducing inconsistencies by 95%.\n- Designed an interactive Power BI dashboard, reducing analysis time by 40%.\n- Highlighted 15% YoY growth, top cities, and iPhone 15 Pro Max’s 14% margin boost",
      technologies: ["Python", "Pandas", "NumPy", "Power BI", "Excel"],
      links: [],
      image: "/image.png",
    },
  ],
  hackathons: [],
  certifications: [
    "Data Analytics – Deloitte",
    "Cyber Security – Deloitte",
    "Object Oriented Programming using Python – Infosys",
    "Database Management System – Infosys",
    "Microsoft Power BI – SkillNations",
    "Gen Ai Google – Coursera",
  ],
} as const;
