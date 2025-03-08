import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiDjango,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaAws,
  FaGoogle,
  FaCloudflare,
  FaPython,
  FaDocker,
  FaChartBar,
} from "react-icons/fa";
import { SiReactquery, SiGoogleanalytics } from "react-icons/si";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  // { name: "Github", route: "/github" },
  // { name: "Articles", route: "/article" },
  // { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Aakash Vyishak S. All Rights Reserved.`,
  author: {
    name: "Aakash Vyishak S",
    accounts: [
      {
        url: "https://github.com/AakashVyishak",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/aakash-vyishaks-9a480834a",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "mailto:aakashvyishaks@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/18BKaf9Z5iW-08ge8fTW268754XAe2dV0/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const techStacks = {
  Web: [
    {
      name: "Python",
      icon: <FaPython size={20} />,
    },
    {
      name: "Django",
      icon: <SiDjango size={20} />,
    },
    {
      name: "Postgresql",
      icon: <SiPostgresql size={20} />,
    },
    {
      name: "AWS",
      icon: <FaAws size={20} />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={20} />,
    },
    {
      name: "Javascript",
      icon: <FaJs size={20} />,
    },
    {
      name: "Pandas",
      icon: <SiPandas size={20} />,
    },
    {
      name: "Numpy",
      icon: <SiNumpy size={20} />,
    },
    {
      name: "Matplotlib",
      icon: <FaChartBar size={20} />,
    },
    {
      name: "Github",
      icon: <FaGitAlt size={20} />,
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs size={20} />,
    },
  ],
  Infra: [
    {
      name: "AWS",
      icon: <FaAws size={20} />,
    },
  ],
  Others: [
    // {
    //   name: "Google Analytics",
    //   icon: <SiGoogleanalytics size={20} />,
    // },
    // {
    //   name: "Google Search Console",
    //   icon: <FaGoogle size={20} />,
    // },
    // {
    //   name: "CI/CD - Fastlane",
    //   icon: <SiFastlane size={20} />,
    // },
    {
      name: "Github & GitLab",
      icon: <FaGitAlt size={20} />,
    },
  ],
};

const companies = [
  {
    title: "Astro",
    alt: "astro image",
    url: "https://www.astro.com.my/",
    role: "Senior Assiociate Frontend Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "Oct 2022 - Present",
    logo: "/images/astro.png",
  },
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Software Engineer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Sept 2022",
    logo: "/images/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/images/timetec.png",
  },
];

const educations = [
  {
    title: "Ponnaiyah Ramajayam Institute of Science and Technology(PRIST), Tamil Nadu",
    alt: "PRIST image",
    url: "https://www.prist.ac.in/",
    role: "Bachelor's Degree in Computer Science",
    skills: ["CGPA - 6.3",],
    period: "Sept 2020- Sept 2024",
    logo: "/images/prist.jpg",
  },
  {
    title: "Chinmaya Vidyalaya Kannur",
    alt: "CvK image",
    role: "",
    url: "https://www.chinmayakannur.ac.in/",
    skills: ["CGPA - 3.33"],
    period: "",
    logo: "/images/chinmaya.png",
  },
];

const projects = {
  Works: [
    {
      name: "Restaurant Billing software",
      imageUrl: "/images/pos.png",
      alt: "RAK",
      summary:
        "A multichain Restaurents Billing software with manager app",
      link: "/",
      tech: ["Python", "Django","Postgresql", "AWS", "javascript", "Docker","ReactJS","electron","TailwindCSS"],
    },
    {
      name: "ERP Software",
      imageUrl: "/images/erp.png",
      alt: "ERP Software",
      summary:
        "ERP Software for koir manufacturer in kerala with inventory,CRM,sales and HR management",
      link: "/",
      tech: ["Python", "Django","Postgresql", "AWS", "Docker","ReactJS","NextJS","TailwindCSS","javascript"],
    },
    {
      name: "Pappalife",
      imageUrl: "/images/pappa.jpg",
      alt: "Pappalife",
      summary:
        "Grocery delivery app",
      link: "/",
      tech: ["Python", "Django","Postgresql", "AWS", "Docker"],
    },
    {
      name: "Milcoff",
      imageUrl:
       "/images/milcoff.png",
      alt: "Milcoff",
      summary:
        "Billing and delivery software for a dairy farm",
      tech:  ["Python", "Django","Postgresql", "AWS", "Docker","ReactJS","NextJS","TailwindCSS","javascript"],
      link: "/",
    },
  ],
  // Freelance: [
  //   {
  //     name: "Ideasss",
  //     imageUrl: "/images/ideasss.png",
  //     alt: "ideasss",
  //     summary:
  //       "NFT Platform for Creativity and Ideas,  First marketplace to connect demanders and designers through transparent competition",
  //     link: "https://ideasss.com/",
  //     tech: ["React", "ReactQuery", "TailwindCSS", "Typescript", "Zustand"],
  //   },
  //   {
  //     name: "3CommasClub NFT",
  //     imageUrl: "/images/3commas.png",
  //     alt: "3commasclub",
  //     summary:
  //       "NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.",
  //     link: "https://nextjs-3commasclub-frontend.vercel.app/",
  //     tech: ["NextJS", "ChakraUI", "Ant Design", "Ant Design Pro"],
  //   },
  //   {
  //     name: "KlusterX Player Portal",
  //     imageUrl: "/images/klusterx_player.png",
  //     alt: "klusterx",
  //     summary:
  //       "Online Gaming Player Portal, built with NextJS, TailwindCSS and MantineUI",
  //     tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
  //   },
  //   {
  //     name: "KlusterX Tenant Portal",
  //     imageUrl: "/images/klusterx_tenant.png",
  //     alt: "klusterx",
  //     summary: "Online Gaming Tenant Portal, built with Ant Design Pro",
  //     tech: ["UmiJS", "Ant Design", "Ant Design Pro"],
  //   },
  // ],
  // "Open Source": [
  //   {
  //     name: "React Date Dropdown",
  //     imageUrl: "/images/date-picker.png",
  //     alt: "date-picker",
  //     summary:
  //       "React Date Dropdown library. Highly customisable and provide individuals components for years, months and days",
  //     tech: ["React", "StorybookJS", "NPM", "Typescript"],
  //   },
  //   {
  //     name: "CM Script",
  //     imageUrl: "/images/cm-script.png",
  //     alt: "klusterx",
  //     summary: "CLI script for linting your commit message 🎉",
  //     tech: ["Javascript", "Bash", "CLI"],
  //   },
  // ],
};

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  projects,
};
