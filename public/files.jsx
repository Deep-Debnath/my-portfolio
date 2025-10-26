// src/data/contentData.js
import { ContactPage, Pages, Person, Work } from "@mui/icons-material";

export const contentData = [
  {
    id: "0",
    title: "About",
    icon: <Person sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      "Hi, I'm Deep Debnath",
      "Frontend Developer from West Bengal",
      "I love React, UI animation, and clean code.",
    ],
  },
  {
    id: "1",
    title: "Projects",
    icon: <Work sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      {
        text: "New-E-Cart 🛒",
        link: "https://new-e-cart.vercel.app/",
      },
      {
        text: "Gemini Chat App",
        link: "https://gemini-clone-5csw.vercel.app/",
      },
      {
        text: "Workflow App",
        link: "https://workflow-pabp2okw3-deepvais-projects.vercel.app/",
      },
    ],
  },
  {
    id: "2",
    title: "Resume",
    icon: <Pages sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [{ text: "Download Resume", link: "/resume.pdf" }],
  },
  {
    id: "3",
    title: "Contact",
    icon: <ContactPage sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      {
        text: "deepdebnath7432@gmail.com",
        link: "mailto:deepdebnath7432@gmail.com",
      },
      { text: "+91 9883837801", link: "tel:+919883837801" },
    ],
  },
];

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMui,
  SiGit,
  SiGithub,
  SiRedux,
  SiBootstrap,
  SiFramer,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
export const skillsData = [
  {
    name: "HTML",
    Icon: SiHtml5,
    color: "#FF7B54",
    info: "Markup language for structuring web pages",
  },
  {
    name: "CSS",
    Icon: SiCss3,
    color: "#33A9DC",
    info: "Stylesheet language for designing websites",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#FFE156",
    info: "Programming language for dynamic web content",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#7FDBFF",
    info: "Library for building user interfaces with components",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#EAEAEA",
    info: "React framework for SSR, SSG, and routing",
  },
  {
    name: "Redux Toolkit",
    Icon: SiRedux,
    color: "#B97FFF",
    info: "State management library for scalable apps",
  },
  {
    name: "Zustand",
    Icon: () => (
      <p className="relative md:bottom-4 bottom-1 text-[40px] lg:text-5xl lg:bottom-0 transition-all icon duration-300 group-hover:scale-125 group-hover:brightness-105 group-hover:drop-shadow-[0_0_25px_#00e5ff] ">
        🐻
      </p>
    ),
    color: "#EAEAEA",
    info: "Lightweight state management using hooks",
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
    color: "#6EE7B7",
    info: "Utility-first CSS framework for rapid styling",
  },
  {
    name: "Material UI",
    Icon: SiMui,
    color: "#6AB7FF",
    info: "React UI library following Material Design",
  },
  {
    name: "Framer Motion",
    Icon: SiFramer,
    color: "#9BE7FF",
    info: "Animation library for smooth UI motion",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#FF866B",
    info: "Version control system for tracking code changes",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "#EAEAEA",
    info: "Platform for hosting and collaborating on code",
  },
];

export const buttons = [
  {
    icon: <SiGithub size={22} />,
    label: "GitHub",
    link: "https://github.com/Deepvai",
    hoverBg: "#171515",
  },
  {
    icon: <SiLinkedin size={22} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/deep-debnath-95a300365/",
    hoverBg: "#0077b5",
  },
  {
    icon: <SiInstagram size={22} />,
    label: "Instagram",
    link: "https://www.instagram.com/debnathdeep766/",
    hoverBg:
      "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
  },
];
