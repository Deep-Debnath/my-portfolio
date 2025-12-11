// src/data/contentData.js
import {
  ContactPage,
  Download,
  Lan,
  MessageSharp,
  Pages,
  Person,
  ShoppingCart,
  Work,
} from "@mui/icons-material";

export const contentData = [
  {
    id: "0",
    title: "About",
    icon: <Person sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      "Hi, I'm Deep Debnath.",
      "Frontend Developer from West Bengal.",
      "Passionate about React, UI animation, and clean, modern interfaces.",
    ],
  },
  {
    id: "1",
    title: "Projects",
    icon: <Work sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      {
        text: (
          <>
            <ShoppingCart className="mr-1" /> New-E-Cart
          </>
        ),
        link: "https://new-e-cart.vercel.app/",
      },
      {
        text: (
          <>
            <MessageSharp className="mr-1" /> Gemini Chat App
          </>
        ),
        link: "https://gemini-clone-5csw.vercel.app/",
      },
      {
        text: (
          <>
            <Lan className="mr-1" /> Workflow App
          </>
        ),
        link: "https://workflow-gilt-five.vercel.app/",
      },
    ],
  },
  {
    id: "2",
    title: "Resume",
    icon: <Pages sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} />,
    items: [
      {
        text: (
          <>
            <Download className="mr-1" /> Get My Resume
          </>
        ),
        link: "/Deep_Debnath_Resume.pdf",
      },
    ],
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
  SiPostman,
  SiFramer,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiLinkedin,
  SiInstagram,
  SiAxios,
  SiTypescript,
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
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    info: "Strongly typed superset of JavaScript",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#7FDBFF",
    info: "Library for building user interfaces",
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
    name: "Axios",
    Icon: SiAxios,
    color: "#9BE7FF",
    info: "HTTP client for API communication",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    color: "#FF6C37",
    info: "API testing and debugging platform",
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
    color: "#38BDF8",
    info: "Utility-first CSS framework",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#FF866B",
    info: "Version control for tracking code changes",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "#EAEAEA",
    info: "Code hosting and collaboration platform",
  },
];
export const buttons = [
  {
    icon: <SiGithub size={22} />,
    label: "GitHub",
    link: "https://github.com/Deep-Debnath",
    hoverBg: "#171515",
  },
  {
    icon: <SiLinkedin size={22} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/deep-debnath-dev/",
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
