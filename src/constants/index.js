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
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
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