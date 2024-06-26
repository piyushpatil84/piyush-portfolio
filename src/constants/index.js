import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  strapi,
  github,
  logixal,
  bbb,
  kascom,
  motion,
  chatgpt,
  zomato,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
    skills: "Upper Intermediate",
    level: "★ ★ ★ ★ ✩",
  },
  {
    title: "Backend Developer",
    icon: backend,
    skills: "Intermediate",
    level: "★ ★ ★ ✩ ✩",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: "★ ★ ★ ★ ✩",
  },
  {
    name: "CSS 3",
    icon: css,
    level: "★ ★ ★ ★ ✩",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "React JS",
    icon: reactjs,
    level: "★ ★ ★ ★ ✩",
  },
  {
    name: "Next.js",
    icon: nextjs,
    level: "★ ★ ★ ★ ✩",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "GitHub",
    icon: github,
    level: "★ ★ ★ ✩ ✩",
  },
  {
    name: "Strapi",
    icon: strapi,
    level: "★ ★ ★ ✩ ✩",
  },
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Logixal Cloud Solutions LLP",
    project_name: "Motion.com",
    icon: motion,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Managed the successful migration of Angular to Next.js, achieving 30% faster page loads and 20% better website performance. Using TypeScript and Scss for improved functionality and user experience",
      "Implemented UI enhancements with Redux for efficient state management.",
      "Boosted platform performance and user engagement across web and mobile applications.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Logixal Cloud Solutions LLP",
    project_name: "KAS Global Commerce Inc",
    icon: kascom,
    iconBg: "#E6DEDD",
    date: "March 2023 - October 2023",
    points: [
      "Developing and maintaining Mysellercentral.com project using React.js, Redux Tookit, Apache ECharts, NodeJs, MongoDB and other related technologies.",
      "Designed and developed a Merchant-focused Seller Central platform featuring intuitive data visualization through charts and tables.",
      "Implemented robust inventory management, sales tracking, shipment monitoring, and comprehensive business reporting functionalities.",
      "Additionally, integrated Amazon API for seamless multichannel fulfillment, enhancing operational efficiency and customer satisfaction",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Logixal Cloud Solutions LLP",
    project_name: "Bed Bath and Beyond",
    icon: bbb,
    iconBg: "#E6DEDD",
    date: "November 2022 - Feb 2023",
    points: [
      "Developing and maintaining Ecom-XT project with tech using React.js and other related technologies.",
      "Proficient in utilizing Verifone's advanced encryption technology to secure sensitive credit card information during payment transactions, ensuring data integrity and compliance with industry standards.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Logixal Cloud Solutions LLP",
    project_name: "Data Engineering Suite",
    icon: logixal,
    iconBg: "#383E56",
    date: "June 2021 - October 2022",
    points: [
      "Developing and maintaining DES project using React.js, ApexCharts, Chart.js and other related technologies.",
      "Collaborating with cross-functional teams including UX-designer, managers, and other developers to create quality products.",
      "Implementing responsive designs.",
    ],
  },
];

const projects = [
  {
    name: "YouTube Lite",
    description:
      "Build a React-based YouTube Clone with advanced video browsing and category-based content filtering for an immersive user experience in areas like music, gaming etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "youtube-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/piyushpatil84/react-youtube-clone",
    live_demo_link: "https://react-youtube-lite.netlify.app/",
  },
  {
    name: "Zomato lite",
    description:
      "Discover the perfect dining experience with Zomato Lite – a React-based clone offering personalized recommendations and elevate your food exploration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "https://github.com/piyushpatil84/react-zomato-lite",
    live_demo_link: "https://react-zomato-lite.vercel.app/",
  },
  {
    name: "ChatGPT",
    description:
      "React ChaGPT Clone, enabling users to search and interact with a AI chatbot for real-time responses to their queries. Currently undergoing maintenance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chatgpt-api",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/piyushpatil84/react-chatGPT",
    live_demo_link: "https://react-chat-gpt-fawn.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
