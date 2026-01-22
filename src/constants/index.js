// index.js
import {IconGitHub, IconLinkedIn, IconInstagram} from "../components/SocialIcons.jsx";
import {
  IconReact,
  IconNext,
  IconTypeScript,
  IconJavaScript,
  
} from "../components/TechIcons";

export const servicesData = [
  {
    title: "Software Engineering",
    description:
      "I design and build reliable, maintainable software with a focus on clean architecture, performance, and real-world usability.",
    items: [
      {
        title: "Application Development",
        description: "(JavaScript, TypeScript, Modular Codebases)",
      },
      {
        title: "Frontend Engineering",
        description: "(React, State Management, Component Design)",
      },
      {
        title: "API Integration",
        description: "(REST APIs, Data Fetching, Auth Flows)",
      },
    ],
  },
 {
    title: "Web Development",
    description:
      "I build modern, responsive, and deployment-ready web applications that work consistently across devices and browsers.",
    items: [
      {
        title: "Responsive UI",
        description: "(Mobile-first layouts, Cross-browser support)",
      },
      {
        title: "Modern Styling",
        description: "(Tailwind CSS, Scalable CSS structure)",
      },
      {
        title: "Web Performance",
        description: "(Optimized assets, smooth rendering)",
      },
    ],
  },
  {
    title: "Deployment & Workflow",
    description:
      "I prepare applications for production with proper build setup, environment handling, and deployment workflows.",
    items: [
      {
        title: "Build & Bundling",
        description: "(Vite, production builds)",
      },
      {
        title: "Deployment",
        description: "(Vercel, Netlify, environment variables)",
      },
      {
        title: "Version Control",
        description: "(Git, GitHub, clean commit history)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Shoe Shop E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "https://e-commerce-pied-zeta-25.vercel.app/",
    image: "/images/shoe.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Xpensa",
    description:
      "Xpensa is a modern, full-stack project management application inspired by Jira. It enables teams to plan, track, and manage work efficiently with an intuitive UI and real-time interactions.",
    href: "https://github.com/Sapanaa/Xpensa",
    image: "/images/XPensa.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Radix UP" },
      { id: 3, name: "Nextjs" },
      { id: 4, name: "Zod" },
      { id: 5, name: "Tailwind CSS" },  
      { id: 6, name: "Prisma ORM" },
    ],
  },
  {
    id: 4,
    name: "Unilab Saas",
    description:
      "It is a scalable web application that helps manage digital and physical library resources. It supports authentication, file uploads, rate-limiting, and a modern UI with strong performance and security.",
    href: "",
    image: "/images/Unilab.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "React 19" },
      { id: 3, name: "bcrypt" },
      { id: 4, name: "ImageKit" },
    ],
  },

  {
    id: 5,
    name: "Landing Page for Bar",
    description:
      "Landing page for a trendy bar featuring drink menus, event info, and reservation options.",
    href: "https://bar-landing-page-git-main-sapanaas-projects.vercel.app/",
    image: "/images/bar.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Vite" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sapana",
    icon: IconInstagram,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sapana-dhami-685071230/",
    icon: IconLinkedIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/Sapanaa",
    icon: IconGitHub,
  },
];


export const techRows = [
  [
    { name: "React", icon: IconReact },
    { name: "Next.js", icon: IconNext },
    { name: "TypeScript", icon: IconTypeScript },
  ],
  
];